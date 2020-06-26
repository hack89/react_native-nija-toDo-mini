import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('Max')
  const [age, setAge] = useState('40')
  const [people, setPeople] = useState([
    {name: 'kevinw', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'john', id: '4'},
    {name: 'jonas', id: '5'},
    {name: 'kevin', id: '6'},
    {name: 'yoshi', id: '7'},
    {name: 'mario', id: '8'},
    {name: 'john', id: '9'},
    {name: 'jonas', id: '10'}

  ])
  const pressHandler =(id)=> {
      console.log(id)
      setPeople(prevState => prevState.filter(el => el.id !== id))
  }

  return (
    <View style={styles.container}>
      {/* <Text>Enter name:</Text>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder="insert name..."
        onChangeText={handleChangeInput}
        />

      <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder="insert age..."
        onChangeText={val => setAge(val)}
        />

      <Text>name: {name}, age: {age}</Text> */}

      {/* <ScrollView>
        {people.map(el => (
          <View style={styles.peopleWrapper} key={el.key}>
            <Text style={styles.peopleItem} >{el.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* ----------- FLAT LIST COMPONENT ---------------- */}

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item})=> (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.peopleItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );

}
 
const styles = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 20,
  paddingTop: 40
},
input:{
  borderWidth: 1,
  width: '90%',
  borderEndColor: '#777',
  padding: 8,
  margin: 10
},
peopleWrapper: {
  marginTop: 3,
  padding: 6
},
peopleItem: {
  backgroundColor: 'pink',
  marginBottom: 3,
  padding: 12,
  marginHorizontal: 10
}
})