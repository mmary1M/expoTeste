

import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./componets/header";

export default function HomePage() {
    const visit = () => {
        router.push('/list')
    }
    return (
        <SafeAreaView style={s.wrap}>
            <Header image={require('@/assets/image/images.png')} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={s.body}>
                    <Text style={s.title}>instagram</Text>
                    <Text style={s.paragraph}>seja bem vindo!</Text>
                </View>
                <View style={s.body2}>
                    <TouchableOpacity style={s.btn} onPress={visit}>
                        <Text style={s.btnText1}>ir pra lista </Text>
                        <Text style={s.btnText2}>ir para conversas</Text>
                        <Image source={require("@/assets/image/insta.png")} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor:'#000000'
    },

    body: {
        backgroundColor: '#000000',
        alignItems: "center",

    },
    body2: {
        alignItems: 'center'
    

    },
    title: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
        padding: 20
    },
    paragraph: {
        color: 'gray',
        padding: 20,
        textAlign: 'center',
        fontSize: 21
    },
    btn: {
        shadowColor: "#cccccc",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        backgroundColor: '#171818',
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#090909',
        borderRadius: 999
    },
    btnText1: {
        color: '#6b6b6b',
        fontSize: 22,
    },
    btnText2:{
        color: '#6b6b6b',
         fontSize: 22,
         height:200
    },
    Image: {
        alignItems: 'center',



    }



});




