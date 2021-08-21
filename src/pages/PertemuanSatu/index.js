import React from 'react'
import { View, Image, Text, ScrollView, TextInput, StyleSheet } from "react-native"
const PertemuanSatu = () => {
    return <ScrollView>
        <View>
            <Text style={stylingText.text}>Hello world!</Text>
            <Text>React-native</Text>
        </View>
        <Image
            source={{ uri: 'https://akcdn.detik.net.id/visual/2020/06/02/09fb4d2c-e9d4-4949-b26d-969983c4bd54_169.jpeg?w=650' }}
            style={{ width: 300, height: 300, marginTop: 8 }}
        />
        <TextInput
            style={{ borderWidth: 1 }}
        />
    </ScrollView>
}
const stylingText = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 16
    }
})

export default PertemuanSatu