//ACTION CREATE ADIÇÃO DE TAREFAS
export const ADD_TODO = 'ADD_TODO';

//ACTION CREATE ADIÇÃO DE TAREFAS
export const addTodo = text => ({

    type: ADD_TODO,
    text

});

// ------------------------------

// ACTION CREATE CHECK DE TAREFAS.
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = todoId => ({

    type: TOGGLE_TODO,
    todoId
    
});

