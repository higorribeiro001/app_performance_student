import React from "react"
import { View, Text, TextInput, TextInputProps  } from "react-native"
import tw from "twrnc"

interface InputFormProps {
    label: string 
    error: string 
    onChange: (text: string) => void 
    value: string
    placeholder: string
    keyboardType:  TextInputProps['keyboardType']
}

export default function InputForm({label, error, onChange, value, placeholder, keyboardType}: InputFormProps) {
    return(
        <View style={tw`mb-3`}>
            <Text style={tw`text-[#008080] font-bold`}>{label}</Text>
            <TextInput
                style={value != '' ? tw`bg-gray-50 p-3 rounded-full mt-2 text-[14px]` : tw`bg-gray-50 p-3 rounded-full mt-2 text-[10px]`}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
            <Text style={tw`mt-2 text-red-500 font-bold`}>{error}</Text>
        </View>
    )
}