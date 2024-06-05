
export const todoReducer = (initialState = [], action) => {  // initialState = [] - En caso de que el initialState este vacio, regrese un arreglo vacio [] evitando errores de ejecucion.

    // { type: [TODO] Delete Todo, payload: id} // En este caso el payload no sera todo el objeto si no solo la variable id.
    switch (action.type) {
        case '[TODO] Add Todo':
            /*
            //return initialState;
            throw new Error('Action.type = ABC no esta implementada'); // Este tipo de linea de lanzar un nuevo error se usan normalmente cuando estamos en etapa de desarrollo y aun no tenenos implmentado codigo para esa parte, asi durante la ejecucion de la aplicacion nos avisara con ese error que probablemente se nos olvido agregar el código en esa parte.
            */
           return [...initialState, action.payload]
        
        case '[TODO] Delete Todo':
            // El metodo filter no muta el arreglo original a diferencia el push, el filter nos retornara un nuevo arreglo

            return initialState.filter( todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            // Con el map regresamos un nuevo arreglo
            return initialState.map( todo =>{
                if( todo.id === action.payload ){ // El paylod aqui lo definimos como el id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 
                return todo;
            })

        default:
            return initialState;
    }
}