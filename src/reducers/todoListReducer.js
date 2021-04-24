import { ADD_TODO, TOGGLE_TODO } from '../actions';

let newID = 1;

const todoListReducer = (state = [], action) => {

    switch(action.type){

        case ADD_TODO:

            //TESTANDO A DISPATCH DE ADD TODO:
            console.log('ADDTODO DISPACHADA COM SUCESSO! - DADOS: ', action.text)

            const newTodo = {

                id: newID++,
                text: action.text,
                done: false

            }

            // Frontend do tcc
            // Sql do tcc
            // Prévia de TCC dia 12-04

            /*
                state -> [0] = Frontend do tcc
                newTodo -> [0] = Sql do tcc
                [...state, newTodo]
                ----------------------------
                state -> [0] = Frontend do tcc
                state -> [1] = Sql do tcc
            */

            return [...state, newTodo];

        case TOGGLE_TODO:

            action.todoId;

            return state.map( todo => {

                if (todo.id === action.todoId){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo

            })
            

        default:
            return state

    }

}

export default todoListReducer