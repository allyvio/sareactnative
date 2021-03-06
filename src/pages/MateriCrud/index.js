import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'


const MateriCrud = () => {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [job, setJob] = useState("")
    const [button, setButton] = useState("simpan")
    const [selectUser, setSelectUser] = useState([])

    const [users, setUser] = useState([])
    const submit = () => {
        const payloads = {
            nama,
            email,
            job
        }
        if (button === "simpan") {
            axios.post('http://10.0.2.2:3004/users', payloads)
                .then(res => {
                    setNama("")
                    setEmail("")
                    setJob("")
                    getData()
                })
        } else if (button === "update") {
            axios.put(`http://10.0.2.2:3004/users/${selectUser.id}`, payloads)
                .then(res => {
                    setNama("")
                    setEmail("")
                    setJob("")
                    setButton("simpan")
                    getData()
                })
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
            .then(res => {
                setUser(res.data)
            })
    }

    const selectedUser = (user) => {
        setNama(user.nama)
        setEmail(user.email)
        setJob(user.job)
        setSelectUser(user)
        setButton("update")
    }
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>Materi Crud</Text>
            <Text>User management</Text>
            <TextInput placeholder="Nama lengkap" style={style.input} onChangeText={(value) => setNama(value)} value={nama} />
            <TextInput placeholder="email" style={style.input} onChangeText={(value) => setEmail(value)} value={email} />
            <TextInput placeholder="job" style={style.input} onChangeText={(value) => setJob(value)} value={job} />
            <Button title={button} onPress={submit} />
            <View style={style.line} />
            {users.map(user => {
                return <Items key={user.id} nama={user.nama} email={user.email} job={user.job} id={user.id} getData={getData} onPress={() => selectedUser(user)} />
            })}
        </View>
    )
}
const Items = (props) => {
    const hapus = (id) => {
        axios.delete(`http://10.0.2.2:3004/users/${id}`)
            .then(res => {
                console.log(res)
                props.getData()
            })
    }
    return <View style={style.itemCard}>
        <TouchableOpacity onPress={props.onPress}>
            <Image source={{ uri: `https://i.pravatar.cc/150?u=${props.email}` }} style={style.avatar} />
        </TouchableOpacity>
        <View style={style.bio}>
            <Text style={style.textNama}>{props.nama}</Text>
            <Text style={style.textEmail}>{props.email}</Text>
            <Text style={style.textJob}>{props.job}</Text>
        </View>
        <Text style={style.delete} onPress={() => hapus(props.id)}>x</Text>
    </View>
}
export default MateriCrud
const style = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center' },
    line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
    avatar: { width: 100, height: 100, borderRadius: 50 },
    input: { borderWidth: 1, borderRadius: 20, paddingHorizontal: 20, marginBottom: 20 },
    itemCard: { flexDirection: 'row', marginBottom: 8 },
    bio: { marginLeft: 20, flex: 1 },
    textNama: { fontSize: 20, fontWeight: 'bold' },
    textEmail: { fontSize: 18 },
    textJob: { fontSize: 16, marginTop: 8 },
    delete: { color: 'red', fontSize: 20, fontWeight: 'bold' }

})