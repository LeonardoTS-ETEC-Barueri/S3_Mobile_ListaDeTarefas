import { ADD_TODO } from '../actions';

const todoListReducer = (state = [], actions) => {

    switch(actions.type){
        case ADD_TODO:

            const newTodo = {
                text: action.text
            }

            return [...state, newTodo]; // Uso de Spread Operator com Array (É básicamente um Array.push()).

        default:
            return state;   // Se nenhuma action foi despachada, o state volta como está.
    }

};

export default todoListReducer;

