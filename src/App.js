import React from 'react'
import { Image, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native'


//normal function js
// function App() {
//   return<Text>Hello world!</Text>
// }
// class App extends Component{
//   render(){
//     return<Text>Haloo dunia</Text> 
//   }
// }
// arrow function js
const App = () => {
    return <View>
        <Text>test</Text>
    </View>
    // <ScrollView>
    //   <View>
    //     <Text style={stylingText.text}>Hello world!</Text>
    //     <Text>React-native</Text>
    //   </View>
    //   <Image 
    //     source={{uri : 'https://akcdn.detik.net.id/visual/2020/06/02/09fb4d2c-e9d4-4949-b26d-969983c4bd54_169.jpeg?w=650'}}
    //     style={{width:300, height:300, marginTop:8}}
    //   />
    //   <Image 
    //     source={Laptop}
    //     style={{width:300, height:300, marginTop:8}}
    //   />
    //   <TextInput
    //   style={{borderWidth:1}}
    //   />
    // </ScrollView>
}

const stylingText = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 16
    }
})
const Name = () => {
    return <Text style={{ fontSize: 20 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
}


export default App