import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { Auth } from '../../Helpers/auth';


const Home = ({ navigation }) => {
    const { logout } = useContext(Auth)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Logout"
                onPress={() => logout()}
            />
        </View>
    );
}
export default Home