import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ProductItem from './pages/ProductItem'
import PertemuanSatu from './pages/PertemuanSatu'
import Navbar from './pages/Navbar'
import FlexBox from './pages/FlexBox'



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
        {/* <FlexBox /> */}
        {/* <Navbar /> */}
        <ScrollView>
            <ProductItem />
        </ScrollView>
        {/* <PertemuanSatu /> */}
    </View>

}
const Name = () => {
    return <Text style={{ fontSize: 20 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
}


export default App