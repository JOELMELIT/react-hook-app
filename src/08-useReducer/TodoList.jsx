import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {



  return (
    <>
        {/* TodoList componente */}
        <ul className="list-group">
            {
            todos.map( todo => (
                // Componente TodoItem que contiene la estructura de la lista de items
                // <TodoItem todo={ todo } key={ todo.id } onDeleteTodo={ id => onDeleteTodo(id)}/>
                <TodoItem 
                  todo={ todo } 
                  key={ todo.id } 
                  onDeleteTodo={ onDeleteTodo } 
                  onToggleTodo={ onToggleTodo }
                />
            ))
            }
        </ul>
        {/* Fin TodoList componente */}
    </>
  )

  
}
