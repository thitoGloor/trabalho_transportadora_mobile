import { useState } from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

export default function Situacao({loja}){ 
    const[showValue,setShowValue] = useState(false);
    return(   
        <TouchableOpacity style={styles.container} onPress={()=>setShowValue(!showValue)}>
             <Text style={styles.textDate}>{loja.date}</Text>
            <View style={styles.content}>
                <Text style={styles.textName}>{loja.label}</Text>
                
                {
                    showValue ? 
                        (<Text style={loja.type===1 ? (styles.textNoOk) : (styles.textOk)}>{loja.situacao}</Text>)
                    :
                        (<View style={styles.disable}></View>)  

                }

            </View> 
        </TouchableOpacity>
       
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
        marginStart: 20,
        marginEnd: 14,
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 4,
        marginBottom: 4,
    },
    textDate:{
        marginTop:8,
        color: '#dadada',
        fontWeight: "bold"
    },
    textName:{
        fontWeight: "bold",
        fontSize: 16,
    },
    textOk:{
        fontSize: 16,
        color: '#2ecc71',
       
    },
    textNoOk:{
        fontSize: 16,
        color: '#e74c3c',
        // fontWeight: "bold",
    },
    disable:{
        marginTop:6,
        backgroundColor: '#dadada',
        width: 80,
        height: 10,
        borderRadius: 8,
    }


})
        // color: '#2ecc71', //verde
       // color: '#e74c3c', //vermelha