import React, {useState} from 'react';
import { StyleSheet, FlatList, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([
      {text: 'buy coffee', key: '1'},
      {text: 'fix pc', key: '2'},
      {text: 'hack nasa', key: '3'}
  ])
   
  const pressHandler=(key)=>{
    setTodos(prevTodos => prevTodos.filter(el => el.key !== key))
  }

  const handleSubmit =(text)=>{
        if(text.length > 3){
            setTodos(prevTodos => [{text, key: Math.random().toString()}, ...prevTodos])
        } else {
            Alert.alert('OOPS!', 'Todos must be over 3 char long..', [
                {text: 'Understood', onPress: ()=> console.log('alert closed')}
            ])
        }
    }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <AddTodo handleSubmit={handleSubmit} />
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={({item}) => (
                            <TodoItem pressHandler={pressHandler} item={item}/>
                        )}
                    />
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );

}
 
const styles = StyleSheet.create({

container:{
    flex: 1,
    backgroundColor: '#fff',

},
content:{
    padding: 40,
    flex: 1
},
list:{
    flex: 1
}
})