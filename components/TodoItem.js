import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';


export default function TodoItem({item, pressHandler}){
    return (
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>        
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        textAlign: 'center'
    },

    text: {
        marginLeft: 10
    }
})