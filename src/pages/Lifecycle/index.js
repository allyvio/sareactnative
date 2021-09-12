import React, { Component, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// class Lifecycle extends Component {
// constructor(props) {
//     super(props)
//     console.log('====> : ini adalah constructor')
//     this.state = {
//         text: 'Lifecycle'
//     }
// }
//     componentDidMount() {
//         console.log('====> : ini adalah didMount')
//         setTimeout(() => {
//             this.setState({
//                 text: 'Lifecycle update'
//             })
//         }, 3000)
//     }
//     componentDidUpdate() {
//         console.log('====> : ini adalah didUpdate')
//     }
//     componentWillUnmount() {
//         console.log('====> : ini adalah WillUnmount')
//     }
//     render() {
//         console.log('====> : ini adalah render')
//         return (
//             <View style={{ padding: 20 }}>
//                 <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>{this.state.text}</Text>
//             </View>
//         )
//     }
// }

const Lifecycle = () => {
    const [text, setText] = useState('Lifecycle')
    useEffect(() => {
        console.log('====>: did mount')
        setTimeout(() => {
            // setText('Lifecycle ubah')
            AsyncStorage.getItem('storage_key')
                .then((data) => {
                    console.log(data);
                })
        }, 2000)
        return () => {
            console.log('====>: did update &/ willunmount');
        }
    }, [])
    return <View style={{ padding: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>{text}</Text>
    </View>
}

export default Lifecycle
