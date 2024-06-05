import { useRef } from "react";

export const FocusScreen = () => {

    // el hook de useRef nos permite mantener una referencia y que cuando esa referencia cambia, nosotros no disparemos una re-renderizacion de nuestro componente.
    const inputRef = useRef();
    //console.log(inputRef);
    const onClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button
            type="button"
            className="btn btn-outline-primary mt-2"
            onClick={ onClick }
        >
            Set Focus
        </button>
        

    </>
  )
}
