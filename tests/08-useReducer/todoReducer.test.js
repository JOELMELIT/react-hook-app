import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }]


    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer( initialState, {});

        // Al llamar al todoReducer y no pasarle nada nos estara retornando el ititialState que sabemos que se trata de la misma referencia en memoria lo cual si se puede evaluar en el expect
        expect( newState ).toBe( initialState );

    });


    test('debe agregar un TODO', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };


        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });


    test('debe eliminar un TODO', () => {

        const action = {
            type: '[TODO] Delete Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
        expect( newState ).not.toHaveLength(1);

    });


    test('debe de realizar el Toggle del TODO', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBeTruthy();

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
    });
});