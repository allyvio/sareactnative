import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const State = () => {
    const [angka, setAngka] = useState(0)
    return <View style={{ padding: 20 }}>
        <Text>Anda menekan sebanyak {angka} kali</Text>
        <Button title="tambah" onPress={() => setAngka(angka + 1)}>
        </Button>
    </View>
}

export default State