import { memo } from "react";

//useCallback: memoiza funciones, es un hook |
//useMemo: memoriza valores, es un hook |
//memo: memoriza componentes, es un HOC.


// memo es un funcion que le dice a REACT memoriza el componente requerido, en este caso el de Small. Solo cuando los properties cambian (example - value) entonces se va a volver a ejecutar todo el componente

export const Small = memo(({ value }) => {

    console.log('Me volví a dibujar :(');
  return (
    <small>{ value }</small>
  )
})


// Tambien se puede importar el memo de la siguiente manera
/*
import React from "react";

export const Small = React.memo(({ value }) => {

    console.log('Me volví a dibujar :(');
  return (
    <small>{ value }</small>
  )
})
*/