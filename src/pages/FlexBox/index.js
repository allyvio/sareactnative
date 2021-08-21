import React from 'react'
import { View } from "react-native"

const FlexBox = () => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#95a5a6', justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={{ width: 80, height: 100, backgroundColor: '#2ecc71' }}></View>
            <View style={{ width: 80, height: 200, backgroundColor: '#3498db' }}></View>
            <View style={{ width: 80, height: 300, backgroundColor: '#e74c3c' }}></View>
            <View style={{ width: 80, height: 400, backgroundColor: '#9b59b6' }}></View>
        </View>
    )
}

export default FlexBox