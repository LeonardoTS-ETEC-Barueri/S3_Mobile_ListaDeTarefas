export const ADD_TODO = 'ADD_TODO'  // Tipo da action.

export const addTodo = (text) => ({ // Action que se comunicará com a Reducer.

    type: ADD_TODO,
    text

});