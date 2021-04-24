import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({

    todos: todoListReducer
    /*
    
    todos{
        [
            {todo: Frontend do tcc},
            {todo: Sql do tcc},
            {todo: Integrar a API no FRONTEND},
        ]
    }
    
    */

})

export default rootReducer