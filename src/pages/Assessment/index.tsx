import React, {useState} from "react"
import { View, Text, Vibration, TouchableOpacity, Pressable, Keyboard, ScrollView, Alert } from "react-native"
import tw from 'twrnc'
import InputForm from "../../components/InputForm"
import { setStudents } from "../../api/students"

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
    const [gender, setGender] = useState('')
    const [ethnicity, setEthnicity] = useState('')
    const [parentalEducation, setParentalEducation] = useState('')
    const [studyTimeWeekly, setStudyTimeWeekly] = useState('')
    const [absences, setAbsences] = useState('')
    const [tutoring, setTutoring] = useState('')
    const [parentalSupport, setParentalSupport] = useState('')
    const [extracurricular, setExtracurricular] = useState('')
    const [sports, setSports] = useState('')
    const [music, setMusic] = useState('')
    const [volunteering, setVolunteering] = useState('')

    const handleRegister = async () => {
        if (name == '' || age == '' || gender == '' || ethnicity == '' || parentalEducation == '' || studyTimeWeekly == '' || absences == '' || tutoring == '' || parentalSupport == '' || extracurricular == '' || sports == '' || music == '' || volunteering == '') {
            setErrorMessage("Campo obrigatório")
            Vibration.vibrate()
        } else {
            try {
                const registerStudentAssesment = await setStudents(
                    name,
                    parseInt(age),
                    parseInt(gender),
                    parseInt(ethnicity),
                    parseInt(parentalEducation),
                    parseFloat(studyTimeWeekly),
                    parseInt(absences),
                    parseInt(tutoring),
                    parseInt(parentalSupport),
                    parseInt(extracurricular),
                    parseInt(sports),
                    parseInt(music),
                    parseInt(volunteering)
                ) as Response
    
                if (registerStudentAssesment.status === 201) {
                    setErrorMessage("")
                    setName("")
                    setAge("")
                    setGender("")
                    setEthnicity("")
                    setParentalEducation("")
                    setStudyTimeWeekly("")
                    setAbsences("")
                    setTutoring("")
                    setParentalSupport("")
                    setExtracurricular("")
                    setSports("")
                    setMusic("")
                    setVolunteering("")
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
                    <InputForm label="Gênero" error={errorMessage} onChange={setGender} value={gender} placeholder="0 para Masculino e 1 para Feminino" keyboardType="numeric" />
                    <InputForm label="Etnia" error={errorMessage} onChange={setEthnicity} value={ethnicity} placeholder="Ex: 0: Caucasian, 1: Afro-americano, 2: Asiático, 3: Outro" keyboardType="numeric" />
                    <InputForm label="Nível de educação dos pais" error={errorMessage} onChange={setParentalEducation} value={parentalEducation} placeholder="Ex: 0: Nenhum, 1: Ensino Mé..., 2: Faculdade, 3: Bacharel, 4: Superior" keyboardType="numeric" />
                    <InputForm label="Tempo de estudo semanal (horas)" error={errorMessage} onChange={setStudyTimeWeekly} value={studyTimeWeekly} placeholder="Variando de 0 a 20" keyboardType="numeric" />
                    <InputForm label="Ausências" error={errorMessage} onChange={setAbsences} value={absences} placeholder="Variando de 0 a 30" keyboardType="numeric" />
                    <InputForm label="Tutoria" error={errorMessage} onChange={setTutoring} value={tutoring} placeholder="0 indica Não e 1 indica Sim" keyboardType="numeric" />
                    <InputForm label="Nível de apoio parental" error={errorMessage} onChange={setParentalSupport} value={parentalSupport} placeholder="Ex: 0: Nenhum, 1: Baixo, 2: Moderado, 3: Alto, 4: Muito alto..." keyboardType="numeric" />
                    <InputForm label="Extracurricular" error={errorMessage} onChange={setExtracurricular} value={extracurricular} placeholder="0 indica Não e 1 indica Sim" keyboardType="numeric" />
                    <InputForm label="Esportes" error={errorMessage} onChange={setSports} value={sports} placeholder="0 indica Não e 1 indica Sim" keyboardType="numeric" />
                    <InputForm label="Música" error={errorMessage} onChange={setMusic} value={music} placeholder="0 indica Não e 1 indica Sim" keyboardType="numeric" />
                    <InputForm label="Voluntariado" error={errorMessage} onChange={setVolunteering} value={volunteering} placeholder="0 indica Não e 1 indica Sim" keyboardType="numeric" />
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