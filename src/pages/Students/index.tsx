import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import tw from 'twrnc'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStudents } from '../../api/students'

interface Student {
    id: string
    name: string
    gpa: number
    grade_class: string
}



export default function Students() {
    const [listStudents, setListStudents] = useState<Student[]>([])

    useEffect(() => {
        async function fetchData() {
          const response: Student[] = await getStudents()
    
          setListStudents(response)
        }
    
        fetchData();
      }, [listStudents]);
    
    return(
        <View style={tw`py-3`}>
            {listStudents ? (
                <View>
                    <Text style={tw`text-[18px] font-bold px-4 py-2`}>Avaliações realizadas:</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={listStudents}
                        renderItem={({item}) => {
                            return(
                                <View style={tw`flex-row p-5 mx-4 my-2 bg-gray-50 rounded gap-6`}>
                                    <View>
                                        <MaterialCommunityIcons name="school" color='#008080' size={50} />
                                    </View>
                                    <View>
                                        <View style={tw`flex-row gap-1`}>
                                            <Text style={tw`text-[#008080] font-bold`}>
                                                Estudante:
                                            </Text>
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </View>
                                        <View style={tw`flex-row gap-1`}>
                                            <Text style={tw`text-[#008080] font-bold`}>
                                                Resultado:
                                            </Text>
                                            <Text>
                                                {item.gpa}
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