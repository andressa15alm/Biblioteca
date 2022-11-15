import React, { Component } from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions"
export default class RetiradaScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            domState:"normal",
            hasCameraPermissions:null,
            scanned:false,
            scannedData:""
        }
    }


    getCameraPermissions=async domState=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
           hasCameraPermissions:status=== "grated",
            domState:domState,
            scanned:false
        });
    };

    handleBarCodeScanned=async({type,data})=>{
        this.setState({
            scannedData:data,
            domState:"normal",
            scanned:true
        });
    }

    render(){

        const{domState,hasCameraPermissions,scannedData,scanned}=this.state;
            if(domState==="scanner"){
                return(<BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}/>
                )
            }
        return(
            <View style={styles.container}>
                <Text style={styles.textms}>
                    {hasCameraPermissions? scannedData:"Solicitar Permissão para a câmera"}
                </Text>
                <TouchableOpacity style={styles.btqr}
                onPress={()=>this.getCameraPermissions("scanner")}
                >
                <Text style={styles.texto}>QR Code</Text>
                </TouchableOpacity>
                   
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
    },
    btqr:{
        width:"43%",
        height:55,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f48d20",
        borderRadius:15,
    },
})
