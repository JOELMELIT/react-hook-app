import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => { 


    test('debe de retornar los valores por defecto', () => { 
        // El renderHook nos va a permitir renderizar un hook en nuestras pruebas
        const { result } = renderHook( () => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
        
    });


    test('debe de generar el counter con el valor de 100', () => {

        //const { result: { current: { counter }} } = renderHook( () => useCounter(100));
        
        const { result } = renderHook( () => useCounter(100));
        expect( result.current.counter ).toBe(100);

    });


    test('debe de incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100));
        const { counter, increment } = result.current;

        // When testing, code that causes React state updates should be wrapped into act(...)
        act( () => {
            increment();
            increment(2);
        });

        // Como ya sabemos la variable counter que esta en la desestructuración de result.current , crea una nueva variable counter y asigna el valor contenido en ese momento, por lo que si sufre una modificacion el result.current, la variable counter no se dara cuenta, por lo que seria mejor evaluar con respecto al valor que actualmente esta en el result.
        expect( result.current.counter ).toBe(103);
    });


    test('debe de decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100));
        const { counter, decrement } = result.current;
        // When testing, code that causes React state updates should be wrapped into act(...)
        act( () => {
            //decrement();
            decrement(2);
        });
        expect( result.current.counter ).toBe(98);
    });

    test('debe de realizar el reset', () => {
        const { result } = renderHook( () => useCounter(100));
        const { counter, decrement, reset } = result.current;

        act( () => {
            decrement(2);
            reset();
        });

        expect( result.current.counter ).toBe(100);
    });

});