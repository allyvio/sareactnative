import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native'
import { Auth } from '../../Helpers/auth'

const Login = () => {

    const { login } = useContext(Auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const loginHandler = () => {
        login(email, password)
    }

    return (
        <View style={style.container}>
            <Text style={style.textTitle}>Login</Text>
            <TextInput placeholder="Email" style={style.textInput} value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="Password" style={style.textInput} value={password} onChangeText={(value) => setPassword(value)} />
            <TouchableOpacity style={style.buttonStyle}>
                <Button title="Login" onPress={() => loginHandler()} />
            </TouchableOpacity>
        </View>
    )
}

export default Login
const style = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
    text: { textAlign: 'center', fontSize: 20 },
    line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
    textInput: { borderWidth: 1, marginTop: 8, height: 60, width: '100%', fontSize: 20, borderColor: 'blue' },
    buttonStyle: { marginTop: 20 }
})
