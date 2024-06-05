import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Joel',
        email: 'joel-tec@outlook.com'
    }


    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        //console.log( result );

        expect( result.current ).toEqual(
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any( Function ),
                onResetForm: expect.any( Function ),
            }
        );
    });


    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Jorge';

        /*const target = {
            name: 'name',
            value: newValue
        }*/

        const { result } = renderHook( () => useForm(initialForm) );

        const { onInputChange } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value:  newValue }});
        })

        /*act( () => {
            onInputChange({target});
        })*/

        //console.log( result );
        
        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
    });


    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Jorge';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value:  newValue }});
            onResetForm();
        })

        console.log( result );

        expect( result.current.name ).not.toBe( newValue );
        expect( result.current.name ).toBe( initialForm.name );

        expect( result.current.formState.name ).not.toBe( newValue );
        expect( result.current.formState.name ).toBe( initialForm.name );
    });
});