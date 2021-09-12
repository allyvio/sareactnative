import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MateriAsync = () => {
    const [valueInput, setValueInput] = useState('')
    const [data, setData] = useState('')

    const saveData = () => {
        if (valueInput) {
            AsyncStorage.setItem('storage_key', valueInput)
            setValueInput('')
        } else {
            alert('please fill the form')
        }
    }
    const getData = () => {
        AsyncStorage.getItem('storage_key')
            .then((data) => {
                setData(data)
            })
    }
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>Async Storage React Native</Text>
            <TextInput placeholder="input data" style={style.textInput} value={valueInput} onChangeText={(value) => setValueInput(value)} />
            <TouchableOpacity style={style.buttonStyle}>
                <Button title="Save data" onPress={saveData} />
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle}>
                <Button title="Get data" onPress={getData} />
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={style.text}>{data}</Text>
        </View>
    )
}

export default MateriAsync
const style = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
    text: { textAlign: 'center', fontSize: 20 },
    line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
    textInput: { borderWidth: 1, marginTop: 8, height: 60, width: '100%', fontSize: 20, textAlign: 'center', borderColor: 'blue' },
    buttonStyle: { marginTop: 20 }
})
