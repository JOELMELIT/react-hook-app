
import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initialState = [];

const init = () =>{
  return JSON.parse( localStorage.getItem('todos'))  || [];
}

export const useTodos = () => {


    const [todos, dispatch] = useReducer( todoReducer , initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
      const action = {
      type: '[TODO] Add Todo',
      payload: todo
      } 
      // Despachando la accion
      dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
      dispatch({
      type: '[TODO] Delete Todo',
      payload: id
      });
    }

    const handleToggleTodo = ( id ) => {
      dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
      });
    }
    
    const pendingTodosCount = todos.filter( todo => !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length, // Se puede poner la lógica (todos.length) dentro del return o afuera como en el const pendingTodosCount
    pendingTodosCount,
  }
}
