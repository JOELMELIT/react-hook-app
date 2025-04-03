import React, { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

//useCallback: memoriza funciones, es un hook |
//useMemo: memoriza valores de retorno, es un hook |
//memo: memoiza componentes, es un HOC.

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // useCallback sirve para memorizar funciones(referencia en memoria), regresa una funcion que podemos ejecutar, pero la funcion memorizada solo se va a procesar cuando algo cambie en la dependencia
    const incrementFather = useCallback( (value) => {
        //setCounter(counter + 1);  //No funciona
        setCounter( ((cCounter) => cCounter + value));
      }, [],
    )


    // Tener en cuenta que si dentro de un useEffect llamamos la funcion incrementFather y no se esta usando el memo dentro de ShowIncrement.jsx, la funcion incrementFather siempre seria diferente, provocando un bucle
    useEffect(() => {
      //incrementFather();
    }, [incrementFather])
    
    
    /*
    const incrementFather = () => {
        setCounter(counter + 1);
    }
    */

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ incrementFather }/>
    </>
  )
}
