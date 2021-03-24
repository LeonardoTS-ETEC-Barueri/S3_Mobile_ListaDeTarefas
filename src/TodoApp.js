import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TodoForm from './components/TodoForm';

class TodoApp extends React.Component {

    render(){

        return (
            <View style={styles.container}>
                {/* <Text>Página Inicial</Text> */}
                <TodoForm />
            </View>
        );

    };

};

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        backgroundColor: '#ccc'
    }

});

export default TodoApp;