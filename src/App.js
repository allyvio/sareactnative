import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CallApiVanilla from './pages/CallApiVanilla';
import CallApiAxios from './pages/CallApiAxios';
import MateriCrud from './pages/MateriCrud';
import Lifecycle from './pages/Lifecycle';
import MateriAsync from './pages/MateriAsync';

import Home from './pages/Home';
import Login from './pages/Login'
import DetailsScreen from './pages/DetailScreen';
import { Auth } from './Helpers/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
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
const Stack = createNativeStackNavigator();

const App = () => {
    // const [isLoading, setIsLoading] = useState(true)
    // const [token, setToken] = useState(null)
    // const [email, setEmail] = useState(null)

    //initial
    const initialLoginState = {
        isLoading: true,
        token: null,
        email: null
    }

    const loginReducer = (prevState = initialLoginState, action) => {
        switch (action.type) {
            case 'RETRIVE_TOKEN':
                return {
                    ...prevState,
                    token: action.token,
                    isLoading: false
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    email: action.email,
                    token: action.token,
                    isLoading: false
                }
            case 'LOGOUT':
                return {
                    ...prevState,
                    token: null,
                    email: null,
                    isLoading: false
                }
        }
    }
    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

    useEffect(() => {
        setTimeout(async () => {
            let userToken
            userToken = null
            try {
                userToken = await AsyncStorage.getItem('userToken')
                dispatch({ type: 'RETRIVE_TOKEN', token: userToken })

            } catch (e) {
                console.log(e);
            }
        }, 1000)
    }, [])

    const auth = useMemo(() => ({
        login: async (email, password) => {
            let userToken
            userToken = null
            const payloads = {
                email: email,
                password: password
            }
            axios.post('https://reqres.in/api/login', payloads)
                .then(response => {
                    userToken = response.data.token
                    AsyncStorage.setItem('userToken', userToken)
                    dispatch({ type: 'LOGIN', email: email, token: userToken })
                })
        },
        logout: async () => {
            try {
                await AsyncStorage.removeItem('userToken')
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'LOGOUT' })
        }
    }))


    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='blue' />
            </View>
        )
    } else {
        return (
            <Auth.Provider value={auth}>
                <NavigationContainer>
                    <Stack.Navigator>
                        {loginState.token !== null ? (
                            <Stack.Screen name="Home" component={Home} />
                        )
                            :
                            <Stack.Screen name="Login" component={Login} />
                        }
                    </Stack.Navigator>
                </NavigationContainer>
            </Auth.Provider>
        )
    }
    // return <Lifecycle />
    // const [isShow, setShow] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShow(false)
    //     }, 5000)
    // }, [])
    // <View>
    //     {isShow && <Lifecycle />}
    // </View>
    // <CallApiAxios />
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