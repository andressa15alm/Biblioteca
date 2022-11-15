import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";

export default class RetiradaScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Tela de retirada</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#5653D4",
    },
    texto:{
        color:"#ffffff",
        fontSize:30,
    }
})