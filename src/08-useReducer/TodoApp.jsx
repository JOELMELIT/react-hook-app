
// Componentes
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

// Custom Hook
import { useTodos } from "./hooks/useTodos"




export const TodoApp = () => {

  // TAREA - Usando nuestro Custom Hook
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

  return (
    <>
        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount } </small></h1>
        <hr />

        <div className="row">
          <div className="col-7">

            <TodoList 
              todos={ todos } 
              onDeleteTodo={ id => handleDeleteTodo(id) } 
              onToggleTodo={ handleToggleTodo }
            />

          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4> 
            <hr />

            <TodoAdd 
              onNewTodo={ handleNewTodo }
            />

          </div>
        </div>

    
    </>
  )
}





// DEBIDO A LA TAREA "USETODO" SOLICITADO EN EL VIDEO 151 VAMOS A REDUCIR EL CODIGO DE ARRIBA, PERO MANTENEMOS COMENTADO EL CODIGO TYPEADO EN ANTERIORES VIDEOS

{/* Se comenta de la linea 108 a la 124

    const initialState = [
      {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
      },
      {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del poder',
        done: false,
      }
    ]


*/}


/* Se comenta de la linea 127 a la 212

const init = () =>{
  // Intenta Parsear todo lo que viene del atributo "todos" del local storage pero en caso de no existir registros retornar un arreglo vacio "|| []"
  return JSON.parse( localStorage.getItem('todos') || [] );
}

export const TodoApp = () => {

  // dispatch - Funcion que despacha acciones al useReducer
  // todos    - Es el State
  const [todos, dispatch] = useReducer( todoReducer , initialState, init)   // todoReducer y no todoReducer() - ya que estamos pasando la referencia a la funcion y no llamando a ejecutar la funcion.
  // init - Es una funcion de Inicializacion

  // Vamos a almacenar datos en el localStorage, utilizando el useEffect primeramente para que se ejecute al cargar la pagina y muestre la lista de "todos" que en ese momento se encuentren almacenados en el localStorage y posteriormente si se agregan nuevos "todos" volver a lanzar el useEffect para almacenar los nuevos datos
  useEffect(() => {
    // El local Storage no puede almacenar datos como objeto por eso se transformar a formato JSON para ser almacenados
    localStorage.setItem('todos', JSON.stringify(todos || []));
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    //console.log({ todo });
    
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    } 

    // Despachando la accion
    dispatch( action );

  }

  const handleDeleteTodo = ( id ) => {
    //console.log(id);
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    console.log(id);
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }


  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
          <div className="col-7">

            <TodoList 
              todos={ todos } 
              onDeleteTodo={ id => handleDeleteTodo(id) } 
              onToggleTodo={ handleToggleTodo }
            />

          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4> 
            <hr />

            <TodoAdd 
              onNewTodo={ handleNewTodo }
            />

          </div>
        </div>

    
    </>
  )
}

*/
