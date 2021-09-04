import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import axios from 'axios'


const params = {
    name: "morpheus",
    job: "leader"
}
const CallApiAxios = () => {
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
    })
    const [dataJob, setDataJob] = useState({
        name: '',
        job: ''
    })
    const Users = (props) => {
        return <View>
            <Image
                source={{ uri: props.avatar }}
                style={style.avatar}
            />
            <Text>{props.email}</Text>
            <Text>{`${props.first_name} ${props.last_name}`}</Text>
        </View>
    }

    const Jobs = (props) => {
        return <View>
            <Text>{props.name}</Text>
            <Text>{props.job}</Text>
        </View>
    }

    const getData = () => {
        // fetch('https://reqres.in/api/users/2')
        //     .then(response => response.json())
        //     .then(json => {
        //         // console.log(json.data);
        //         setDataUser(json.data)
        //     })

        axios.get('https://reqres.in/api/users/2')
            .then(result => console.log(result.data.data))
    }
    const postData = () => {
        // fetch('https://reqres.in/api/users', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(params)
        // })
        //     .then(response => response.json())
        //     .then(json => {
        //         setDataJob(json)
        //     })

        axios.post('https://reqres.in/api/users', params)
            .then(result => {
                setDataJob(result.data)
            })
            .catch(err => console.log(err))

    }
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>ini materi call api vanilla</Text>
            <Button title="Get Data Api" onPress={getData} />
            <Text>response get data</Text>
            {dataUser.avatar.length > 0 && (
                <Users
                    avatar={dataUser.avatar}
                    email={dataUser.email}
                    first_name={dataUser.first_name}
                    last_name={dataUser.last_name}
                />
            )}

            <View style={style.line} />
            <Button title="Post Data Api" onPress={postData} />
            <Text>response get data</Text>
            <Jobs
                name={dataJob.name}
                job={dataJob.job}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center' },
    line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
    avatar: { width: 100, height: 100, borderRadius: 50 }
})
export default CallApiAxios
