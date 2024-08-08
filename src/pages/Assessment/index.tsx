import React, {useState} from "react"
import { View, Text, Vibration, TouchableOpacity, Pressable, Keyboard, ScrollView, Alert } from "react-native"
import tw from 'twrnc'
import InputForm from "../../components/InputForm"
import { setStudents } from "../../api/students"
import SelectDropdown from 'react-native-select-dropdown'

type ResponseData = {
    resultado: number;
    classe: string;
  };
  
type Response = {
    status: number;
    data: ResponseData;
};

export default function Assestment() {
    const [errorMessage, setErrorMessage] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState(0)
    const [ethnicity, setEthnicity] = useState(0)
    const [parentalEducation, setParentalEducation] = useState(0)
    const [studyTimeWeekly, setStudyTimeWeekly] = useState('')
    const [absences, setAbsences] = useState('')
    const [tutoring, setTutoring] = useState(0)
    const [parentalSupport, setParentalSupport] = useState(0)
    const [extracurricular, setExtracurricular] = useState(0)
    const [sports, setSports] = useState(0)
    const [music, setMusic] = useState(0)
    const [volunteering, setVolunteering] = useState(0)

    const handleRegister = async () => {
        if (name === '' || age === '' || !gender || ethnicity === null || parentalEducation === null || studyTimeWeekly === '' || absences === '' || tutoring === null || parentalSupport === null || extracurricular === null || sports === null || music === null || volunteering === null) {
            setErrorMessage("Campo obrigatório")
            Vibration.vibrate()
        } else {
            try {
                const registerStudentAssesment = await setStudents(
                    name,
                    parseInt(age),
                    gender,
                    ethnicity,
                    parentalEducation,
                    parseFloat(studyTimeWeekly),
                    parseInt(absences),
                    tutoring,
                    parentalSupport,
                    extracurricular,
                    sports,
                    music,
                    volunteering
                ) as Response
    
                if (registerStudentAssesment.status === 201) {
                    setErrorMessage("")
                    setName("")
                    setAge("")
                    setGender(0)
                    setEthnicity(0)
                    setParentalEducation(0)
                    setStudyTimeWeekly("")
                    setAbsences("")
                    setTutoring(0)
                    setParentalSupport(0)
                    setExtracurricular(0)
                    setSports(0)
                    setMusic(0)
                    setVolunteering(0)
                    Alert.alert(
                        'Sucesso',
                        'Registro realizado com sucesso.',
                    )
                }
            } catch(e:any) {
                Alert.alert(
                    'Erro',
                    'Ocorreu um erro inesperado. Verifique seus dados e tente novamente.',
                )
            }
        }
    }

    const listSelects = [
        {
            label: "Gênero",
            items: [
                {title: 'Masculino', value: 0},
                {title: 'Feminino', value: 1},
            ],
            data: 'gender'
        },
        {
            label: "Etnia",
            items: [
                {title: 'Caucasian', value: 0},
                {title: 'Afro-americano', value: 1},
                {title: 'Asiático', value: 2},
                {title: 'Outro', value: 3},
            ],
            data: 'ethnicity'
        },
        {
            label: "Nível de educação dos pais",
            items: [
                {title: 'Nenhum', value: 0},
                {title: 'Ensino Médio', value: 1},
                {title: 'Faculdade', value: 2},
                {title: 'Bacharel', value: 3},
                {title: 'Superior', value: 4},
            ],
            data: 'parentalEducation'
        },
        {
            label: "Tutoria",
            items: [
                {title: 'Não', value: 0},
                {title: 'Sim', value: 1},
            ],
            data: 'tutoring'
        },
        {
            label: "Nível de apoio parental",
            items: [
                {title: 'Nenhum', value: 0},
                {title: 'Baixo', value: 1},
                {title: 'Moderado', value: 2},
                {title: 'Alto', value: 3},
                {title: 'Muito Alto', value: 4},
            ],
            data: 'parentalSupport'
        },
        {
            label: "Extracurricular",
            items: [
                {title: 'Não', value: 0},
                {title: 'Sim', value: 1},
            ],
            data: 'extracurricular'
        },
        {
            label: "Esportes",
            items: [
                {title: 'Não', value: 0},
                {title: 'Sim', value: 1},
            ],
            data: 'sports'
        },
        {
            label: "Música",
            items: [
                {title: 'Não', value: 0},
                {title: 'Sim', value: 1},
            ],
            data: 'music'
        },
        {
            label: "Voluntariado",
            items: [
                {title: 'Não', value: 0},
                {title: 'Sim', value: 1},
            ],
            data: 'volunteering'
        },
    ]

    return(
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={tw`p-5`}
            >
                <Text style={tw`text-[18px] font-bold py-2 mb-4`}>Preencha o formulário:</Text>
                <Pressable onPress={Keyboard.dismiss}>
                    <InputForm label="Nome" error={errorMessage} onChange={setName} value={name} placeholder="Ex. Higor" keyboardType="default" />
                    <InputForm label="Idade" error={errorMessage} onChange={setAge} value={age} placeholder="Varia de 15 a 18 anos" keyboardType="numeric" />
                    {listSelects.map((item, index) => (
                        <View 
                            key={index}
                            style={tw`mb-3`}
                        >
                            <Text style={tw`text-[#008080] font-bold`}>{item.label}</Text>
                            <SelectDropdown
                                data={item.items}
                                onSelect={(selectedItem, index) => {
                                    if (item.data === "gender") {
                                        setGender(selectedItem.value);
                                    } else if (item.data === "ethnicity") {
                                        setEthnicity(selectedItem.value);
                                    } else if (item.data === "parentalEducation") {
                                        setParentalEducation(selectedItem.value)
                                    } else if (item.data === "tutoring") {
                                        setTutoring(selectedItem.value)
                                    } else if (item.data === "parentalSupport") {
                                        setParentalSupport(selectedItem.value)
                                    } else if (item.data === "extracurricular") {
                                        setExtracurricular(selectedItem.value)
                                    } else if (item.data === "sports") {
                                        setSports(selectedItem.value)
                                    } else if (item.data === "music") {
                                        setMusic(selectedItem.value)
                                    } else if (item.data === "volunteering") {
                                        setVolunteering(selectedItem.value)
                                    }
                                }}
                                renderButton={(selectedItem, isOpened) => {
                                    return (
                                        <View style={tw`bg-gray-50 p-3 rounded-full mt-2 text-[14px]`}>
                                            <Text>
                                                {(selectedItem && selectedItem.title) || 'Selecione...'}
                                            </Text>
                                        </View>
                                    );
                                    }}
                                renderItem={(item, index, isSelected) => {
                                    return (
                                        <View style={item.value === ethnicity ? tw`bg-[#008080] text-[14px]` : tw`bg-gray-50 text-[14px]`}>
                                            <Text style={item.value === ethnicity ? tw`p-3 text-[#ffffff]` : tw`p-3`}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                                showsVerticalScrollIndicator={false}
                                dropdownStyle={tw`bg-gray-50 text-[14px]`}
                            />
                            <Text style={tw`mt-2 text-red-500 font-bold`}>{errorMessage}</Text>
                        </View>
                    ))}
                    <InputForm label="Tempo de estudo semanal (horas)" error={errorMessage} onChange={setStudyTimeWeekly} value={studyTimeWeekly} placeholder="Variando de 0 a 20" keyboardType="numeric" />
                    <InputForm label="Ausências" error={errorMessage} onChange={setAbsences} value={absences} placeholder="Variando de 0 a 30" keyboardType="numeric" />
                    <TouchableOpacity 
                        onPress={handleRegister}
                        style={tw`bg-[#008080] rounded-full mb-12`}  
                    >
                        <Text style={tw`text-[#fff] font-bold p-3 text-center`}>Enviar</Text>
                    </TouchableOpacity>
            </Pressable>
            </ScrollView>
        </View>
    )
}