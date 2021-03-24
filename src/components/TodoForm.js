import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Input from './Input';

export default class TodoForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: ''
        };

    };

    render(){

        return (
            <View style={styles.formContainer}>

                <View style={styles.inputContainer}>
                    <Input />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="ADD"
                    />
                </View>

            </View>
        );

    };

};

const styles = StyleSheet.create({

    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }

});