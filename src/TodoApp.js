import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TodoForm from './components/TodoForm';

// Início da Criação da Store
    import { createStore } from 'redux';
    import { Provider } from 'react-redux'; // Componente Wrapper que lidará diretamente com a Store.

    import rootReducer from './reducers';

    const store = createStore(rootReducer);

// Fim da Criação da Store.

class TodoApp extends React.Component {

    render(){

        return (
            <Provider store={ store }>

                <View style={styles.container}>
                    {/* <Text>Página Inicial</Text> */}
                    <TodoForm />
                </View>
                
            </Provider>
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