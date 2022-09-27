import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.informacao}>Contato : (55) 3333-0000<Text />
                    <TouchableOpacity activeOpacity={0.9}></TouchableOpacity>
                    <Feather name='phone' size={12} color="#fff" />
                    <Text style={styles.informacao}> {'\n'}visite nosso site: www.mobile_positivo.com.br</Text>
                    <TouchableOpacity activeOpacity={0.9}>
                        <Feather name='globe' size={12} color="#fff" />
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gold',
        paddingTop: 15,
        paddingStart: 6,
        paddingEnd: 6,
        paddingBottom: 14,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    informacao: {
        fontSize: 12,
        fontWeight: '200',
        color: 'darkblue',
        justifyContent: "space-between",
    },   
})