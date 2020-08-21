import React from "react";
import{Text,View,TouchableOpacity,StyleSheet} from "react-native";
//import * as Permissions from "expo-permissions";
//import {BarcodeScanner} from "expo-barcode-scanner";

export default class TransactionScreen extends React.Component{
render() {
    return(
        <View style = {styles.container}>
            <Text style = {styles.displayText}>Dummy or Code Output</Text>
            <TouchableOpacity style = {styles.ScanButton}>
                <Text>Scan QR Code</Text>
                </TouchableOpacity>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    displayText:{
        fontSize:15,
        textDecorationLine:"underline",
    },
    ScanButton:{
        backgroundColor:"Red",
        padding:10,
        margin:10,
    }

})