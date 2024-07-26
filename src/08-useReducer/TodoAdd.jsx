import { useState } from "react";
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

    
    
    // Reutilizamos el Custom hook useForm creado anteriormente
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });
    

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if( description.length <= 1 )  return;
        
        const newTodo = {
            id: new Date().getTime(),
            //description: event.target.description.value,
            description: description,
            done: false,
        }

        // Se lee asi: sí la funcion onNewTodo existe proveniente del proptypes entonces la ejecutamos
        onNewTodo && onNewTodo(newTodo);
        onResetForm();
    }
    

  return (
    <>

        {/* TodoAdd onNewTodo( todo ) */}
        {/* { id: new Date()..., description: '', done: false } */}
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-3"
            >
                Agregar
            </button>

        </form>
        {/* Fin TodoAdd */}

    </>
  )
}
