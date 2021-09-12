import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CallApiVanilla from './pages/CallApiVanilla';
import CallApiAxios from './pages/CallApiAxios';
import MateriCrud from './pages/MateriCrud';
import Lifecycle from './pages/Lifecycle';
import MateriAsync from './pages/MateriAsync';

// import ProductItem from './pages/ProductItem'
// import PertemuanSatu from './pages/PertemuanSatu'
// import Navbar from './pages/Navbar'
// import FlexBox from './pages/FlexBox'
// import PropsDinamis from './pages/PropsDinamis'
// import State from './pages/State'



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
// const HomeScreen = ({ navigation }) => {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }
// function DetailsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//             {/* <Button title="Go to Home 1" onPress={() => navigation.navigate('Home')} /> */}
//             <Button title="Go to detail" onPress={() => navigation.push('Details')} />
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//             <Button
//                 title="Go back to first screen in stack"
//                 onPress={() => navigation.popToTop()}
//             />
//         </View>
//     );
// }
const Stack = createNativeStackNavigator();

const App = () => {
    // const [isShow, setShow] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShow(false)
    //     }, 5000)
    // }, [])
    return <Lifecycle />
    // <View>
    //     {isShow && <Lifecycle />}
    // </View>
    // <CallApiAxios />
    // <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen name="Home" component={HomeScreen} />
    //         <Stack.Screen name="Details" component={DetailsScreen} />
    //     </Stack.Navigator>
    // </NavigationContainer>
    {/* <FlexBox /> */ }
    {/* <Navbar /> */ }
    {/* <ScrollView>
            <ProductItem />
        </ScrollView> */}
    {/* <PertemuanSatu /> */ }
    {/* <ScrollView horizontal>
            <PropsDinamis />
        </ScrollView> */}
    {/* <State /> */ }

}
// const Name = () => {
//     return <Text style={{ fontSize: 20 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
// }


export default App