import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({onChangeText, value}) => (

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