

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


// Un Reducer es una funcion pura que regresa un nuevo state, el action es lo que le dice al Reducer como queremos cambiar el state, siempre se retorna un nuevo estado
const todoReducer = ( state = initialState, action = {}) => {

    // Regresando un nuevo state
    if( action.type === '[TODO] add todo'){
        // no se debe usar el push ya que eso muta el arreglo, con el spread operation "...state", tecnicamente hace una copia del arreglo initialState
        return [...state, action.payload];          // desestructuracion del state anterior y lo que viene en el payload
    }

    return state;
}

let todos = todoReducer();


// Si queremos hacer una modificacion al state, para este ejemplo agregando un nuevo objeto al arreglo, las siguientes lineas no deberian hacerse ya que eso es una mutacion del arreglo y eso no esta permitido
/*
    to-dos.push({
        id: 2,
        to-do: 'Recolectar la piedra del Poder',
        done: false
    })
*/


// Cuando queremos hacer una modificaciónal reducer, debemos mandarle una acción y esa acción le dice como debe modificarse
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',    // Es un String que sirve para poder saber la accion que se esta disparando
    payload: newTodo,           // El payload es la carga que esta en la accion
}

todos = todoReducer( todos, addTodoAction); // Se manda la acción de agregar el nuevo todo a través del addTodoAction



console.log({state: todos});



















