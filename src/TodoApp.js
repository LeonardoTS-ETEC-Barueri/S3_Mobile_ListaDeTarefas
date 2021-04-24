import React from 'react'
import { View, StyleSheet } from 'react-native'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

/* CRIAÇÃO DA STORE */

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

/* CRIAÇÃO DA STORE */

class TodoApp extends React.Component{

    render(){

        return(


            <Provider store={store}>

                <View style={styles.container}>

                    {/* <Text>PÁGINA INICIAL</Text> */}
                    <TodoForm />
                    <TodoList />

                </View>

            </Provider>

        )

    }

}

const styles = StyleSheet.create(

    {

        container: {
            marginTop:30,
            backgroundColor:'#ccc'
        }

    }

)

export default TodoApp