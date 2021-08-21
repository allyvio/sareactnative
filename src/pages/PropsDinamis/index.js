import React from 'react'
import { Image, Text, View } from 'react-native'

// const PropsDinamis = () => {
//     let pic = {
//         uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     }
//     return (
//         <Image source={pic} style={{ width: 193, height: 110, marginTop: 50 }} />
//     )
// }

// const Greeting = (props) => {
//     return <View>
//         <Text style={{ marginLeft: 30, fontWeight: 'bold', fontSize: 20, color: 'red' }}>Haloo {props.name} </Text>
//     </View>
// }
const Items = (props) => {
    return <View>
        <Image
            source={{ uri: props.gambar }}
            style={{ width: 70, height: 70, borderRadius: 70 / 2, marginRight: 20 }}
        />
        <Text>{props.judul}</Text>
    </View>
}
const PropsDinamis = () => {
    return (
        <View style={{ marginLeft: 20, marginTop: 30, flexDirection: 'row' }}>
            <Items gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e15/c0.248.640.640a/s150x150/238554610_1006947593392622_8490609056467371606_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=92BeT7Gcq-gAX8LEBzL&edm=AGW0Xe4BAAAA&ccb=7-4&oh=6a36f065dd7351c1dfc8553a02831e94&oe=6122032A&_nc_sid=acd11b' judul='coding time' />

            <Items gambar='https://scontent-sin6-4.cdninstagram.com/v/t51.12442-15/e35/c0.312.720.720a/s150x150/54731881_409553496268200_2257311899221894794_n.jpg?_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=100&_nc_ohc=8wERFguSPKIAX8sgVQ5&edm=AGW0Xe4BAAAA&ccb=7-4&oh=c80bec14564e3bf0e44ee9a97ba2d72c&oe=6121D937&_nc_sid=acd11b' judul='EM APPS' />

            <Items gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.312.720.720a/s150x150/52127393_2306839789605152_5827978303061949391_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=sPVaYrSokH0AX_ct5JU&edm=AGW0Xe4BAAAA&ccb=7-4&oh=d4b95bc179be6541fdd5eefff51ebd26&oe=6121CE31&_nc_sid=acd11b' judul='#PSKM19' />
            <Items gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/43779378_1254818718044576_5334003774577371654_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=_yNreqEFSucAX_dbmz7&edm=AGW0Xe4BAAAA&ccb=7-4&oh=10de34a91d025567215674e62223513c&oe=6121ADF7&_nc_sid=acd11b' judul='OB APPS' />
            <Items gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/43779378_1254818718044576_5334003774577371654_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=_yNreqEFSucAX_dbmz7&edm=AGW0Xe4BAAAA&ccb=7-4&oh=10de34a91d025567215674e62223513c&oe=6121ADF7&_nc_sid=acd11b' judul='OB APPS' />
            <Items gambar='https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/43779378_1254818718044576_5334003774577371654_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=_yNreqEFSucAX_dbmz7&edm=AGW0Xe4BAAAA&ccb=7-4&oh=10de34a91d025567215674e62223513c&oe=6121ADF7&_nc_sid=acd11b' judul='OB APPS' />
        </View>
    )
}


export default PropsDinamis