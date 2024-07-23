import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

//useCallback: memoiza funciones, es un hook |
//useMemo: memoriza valores de retorno, es un hook |
//memo: memoiza componentes, es un HOC.

// La funcion de heavyStuff la colocamos fuera del MemoHook con la finalidad de que no se vuelva a crear la referencia en memoria cada vez que se renderiza el componente.
const heavyStuff = ( iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }
    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment} = useCounter(4000);
    const [ show, setShow ] = useState(true);

    // useMemo va a memorizar lo que sea que retorne, y el valor memorizado (ejemplo memorizedValue) se va a mantener asi a menos que las condiciones de la dependencia([counter]) de useMemo cambien.
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
   

  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1
        </button>
        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
