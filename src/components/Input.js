import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({onChangeText, value}) => ( // Função iniciada como () define um retorno direto.

// Os parâmetros "onChangeText" e "value" vem de um destructuring da Props do React.Component.

    <TextInput 
        style = {styles.input}
        onChangeText = { onChangeText }
        value = { value }
        underlineColorAndroid = '#000'
    />

);

const styles = StyleSheet.create({

    input: {
        padding: 15
    }

});

export default Input;