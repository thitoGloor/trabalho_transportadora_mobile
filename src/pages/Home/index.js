import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Situacao from '../../components/Situacao';
import Footer from '../../components/Footer';

const entregas = [
    {
        id: 1,
        label: 'Shopee',
        situacao: 'entregue',
        date: '21/05/2022',
        type: 0,
    },
    {
        id: 2,
        label: 'nike',
        situacao: 'entregue',
        date: '04/04/2022',
        type: 0,
    },
    {
        id: 3,
        label: 'amazon',
        situacao: 'atrasado',
        date: '16/04/2022',
        type: 1,
    },
    {
        id: 4,
        label: 'mercado livre',
        situacao: 'despachado na transportadora',
        date: '18/10/2022',
        type: 1,
    },
    {
        id: 5,
        label: 'magazine luiza',
        situacao: 'saiu para entrega',
        date: '27/12/2022',
        type: 0,
    },
    {
        id: 6,
        label: 'casas bahia',
        situacao: 'atrasado',
        date: '21/04/2022',
        type: 1,
    },
    {
        id: 7,
        label: 'pithau',
        situacao: 'cancelado',
        date: '02/06/2022',
        type: 1,
    },
    {
        id: 8,
        label: 'lojas americanas',
        situacao: 'saiu para entrega',
        date: '19/09/2022',
        type: 0,
    },
    {
        id: 9,
        label: 'ali express',
        situacao: 'parado na alfandega',
        date: '30/08/2022',
        type: 1,
    },
]

export default function Home() {
    return (
        //para vc tirar do app.js vc tem que trazer para a home o que vc quer escrever
        // e la no app.js vc chama essa funçao
        //esse parametro é importante p quando fazer login chamar o nome 
        <View style={styles.container}>
            <Header name={"Thiago"}></Header>
            <Menu/> 
            <FlatList sytle={styles.textEntrega}
                data={entregas}
                keyExtractor={(item) => String(item.id)}
                // showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Situacao loja={item} />}
            />
            <StatusBar style="auto" />
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    textEntrega: {
        marginStart: 14,
        marginEnd: 14,
    },    
});