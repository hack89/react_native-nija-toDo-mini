import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff'
    }
})