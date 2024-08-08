import React, { useState, useEffect } from 'react'
import { Alert, View, Text, FlatList, ActivityIndicator, TouchableOpacity  } from 'react-native'
import tw from 'twrnc'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { deleteStudents, getStudents } from '../../api/students'

interface Student {
    id: string
    name: string
    gpa: number
    grade_class: string
}

interface responseDelete {
    status: number
}

export default function Students() {
    const [isLoading, setIsLoading] = useState(false)
    const [listStudents, setListStudents] = useState<Student[]>([])

    async function fetchData() {
        setIsLoading(true)
        const response: Student[] = await getStudents()
    
        setListStudents(response)
        setIsLoading(false)
    }

    async function removeUser(id: number) {
        Alert.alert('Alerta', 'Deseja mesmo remover este aluno?', [
            {
              text: 'Sim',
              onPress: async () => {
                setIsLoading(true),
                await deleteStudents(id).then(() => {
                    fetchData()
                }) as responseDelete
                setIsLoading(false)
              }
            },
            {
              text: 'Não',
              style: 'cancel',
            },
        ]);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return(
        <View style={tw`py-3`}>
            {!isLoading ? (
                <View>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text style={tw`text-[18px] font-bold px-4 py-2`}>Avaliações realizadas:</Text>
                        <TouchableOpacity
                            style={tw`bg-transparent`}
                            onPress={fetchData}
                        >
                            <MaterialCommunityIcons name="refresh" color='#000' size={30} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={tw`h-[94%]`}
                        showsVerticalScrollIndicator={false}
                        data={listStudents}
                        renderItem={({item}) => {
                            return(
                                <View style={tw`flex-row p-5 mx-4 my-2 bg-gray-50 rounded justify-between`}>
                                    <View style={tw`flex-row gap-6`}>
                                        <View>
                                            <MaterialCommunityIcons name="school" color='#008080' size={50} />
                                        </View>
                                        <View>
                                            <View style={tw`flex-row gap-1`}>
                                                <Text style={tw`text-[#008080] font-bold`}>
                                                    Estudante:
                                                </Text>
                                                <Text 
                                                    style={tw`w-[160px]`}
                                                    numberOfLines={1}
                                                    ellipsizeMode="tail"
                                                >
                                                    {item.name}
                                                </Text>
                                            </View>
                                            <View style={tw`flex-row gap-1`}>
                                                <Text style={tw`text-[#008080] font-bold`}>
                                                    Resultado:
                                                </Text>
                                                <Text>
                                                    {item.gpa.toFixed(2)}
                                                </Text>
                                            </View>
                                            <View style={tw`flex-row gap-1`}>
                                                <Text style={tw`text-[#008080] font-bold`}>
                                                    Classificação:
                                                </Text>
                                                <Text>
                                                    {item.grade_class}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={tw`bg-transparent`}
                                            onPress={() => removeUser(parseInt(item.id))}
                                        >
                                            <MaterialCommunityIcons name="delete" color='red' size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item) => {
                            String(item.id)
                        }}
                    />
                </View>
            ) : (
                <View style={tw`flex-col h-full justify-center`}>
                    <ActivityIndicator size="large" color="#008080" />
                </View>
            )}
        </View>
    )
}