import React from 'react'
import {View, Button, StyleSheet } from 'react-native'

import Input from './Input';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            text:''

        }

    }

    onChangeText(text){

        this.setState({

            text

        })

    }

    onPress(){
        console.log(this.state.text);
        
        //CHAMADA DA DISPATCH
        this.props.dispatchAddTodo(this.state.text)
    }


    render(){

        const { text } = this.state;

        return(

            <View style={styles.formContainer}>

                <View style={styles.inputContainer}>
                    <Input onChangeText={ text => this.onChangeText(text) } value={ text } />
                </View>

                <View  style={styles.buttomContainer}>
                    <Button title="ADD" onPress={ () => this.onPress() } />
                </View>

            </View>

        )

    }

}

const styles = StyleSheet.create({

    formContainer:{
        flexDirection:'row'
    },

    inputContainer:{
        flex: 4
    },

    buttomContainer:{
        flex: 1
    }

})

/* IMPLEMENTAÇÃO DA DISPATCH */
    //1º FORMA:
    // const mapDispatchToProps = dispatch => {

    //     return{

    //         dispatchAddTodo: text => dispatch(addTodo(text))

    //     }
    // }

    //2º FORMA:
    const mapDispatchToProps = {

        dispatchAddTodo: addTodo

    }

//REALIZA O EXPORT COM A ADIÇÃO DO MÉTODO connect
export default connect(null, mapDispatchToProps)(TodoForm)