import React from 'react'
import { View, Image, Text } from "react-native"
import Laptop from '../../../laptop.webp'


const ProductItem = () => {
    let listProduct = []
    for (let index = 0; index < 10; index++) {
        listProduct.push(<Item />)

    }
    return <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
        {listProduct}
    </View>
}

const Item = () => {
    return (
        <View style={{ marginTop: 16, backgroundColor: '#ecf0f1', padding: 10, width: '40%', height: 250, marginLeft: 10, borderRadius: 8 }}>
            <Image
                source={Laptop}
                style={{ width: '100%', height: 100, borderRadius: 8 }}
            />
            <Text style={{ marginTop: 16, fontSize: 14, fontWeight: 'bold', marginLeft: 5 }}>ASUS ROG Gl 553 VD</Text>
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: 'bold', color: '#f39c12', marginTop: 10 }}>Rp 20.000.0</Text>
            <Text style={{ marginTop: 8, fontSize: 12, marginLeft: 5, fontWeight: '100' }}>Jakarta selatan</Text>
            <View style={{ marginTop: 16, marginLeft: 5, backgroundColor: '#2ecc71', borderRadius: 50, paddingVertical: 6 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>BELI</Text>
            </View>
        </View>

    )
}
export default ProductItem