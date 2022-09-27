import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import{Feather} from '@expo/vector-icons'



export default function Menu(){
    
    return(
        <View>
            <View style={styles.container}>
            <Text style ={styles.entregaText}>Confira a situacao da sua entrega  </Text>
            <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9} >
                    <Feather name='menu' size={27} color="#fff" />
                    

                </TouchableOpacity>  
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    entregaText:{        
         color: "white",
        fontWeight: "bold",
        fontSize: 16,   
    },
    container:{            
    backgroundColor: "darkblue",   
    paddingTop: 10,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 10,
    justifyContent: "space-between"
    },
    buttonUser:{        
        width:44,
        height: 44,        
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
   
})