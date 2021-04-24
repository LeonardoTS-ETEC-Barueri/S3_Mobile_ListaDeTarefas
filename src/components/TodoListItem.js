import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'



const TodoListItem = ({ todo, onPressTodo }) => {

    console.log(todo)

    return(

        <TouchableOpacity onPress={ onPressTodo }>

            <View style={styles.line}>

                <Text style={

                    
                    todo.done ? styles.lineCheck : styles.lineText

                }>
                    { todo.text }                    
                </Text>

            </View>

        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    line: {

        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'

    },
    lineText: {

        fontSize: 20,
        paddingLeft: 15

    },
    lineCheck: {

        fontSize: 20,
        paddingLeft: 15,
        textDecorationLine: 'line-through'

    }

})

export default TodoListItem;