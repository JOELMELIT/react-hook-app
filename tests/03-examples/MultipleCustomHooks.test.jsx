import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

// Aqui el jest hace un mock completo de todo el objeto useFetch '../../src/hooks/useFetch'
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement, 
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {

        // Debemos simular o implementar el mock en todos los testings donde use la funcion useFetch
        useFetch.mockReturnValue({
            data: null,
            hasError: false, 
            isLoading: true
        });

        render(<MultipleCustomHooks /> );

        //screen.debug();

        expect( screen.getByText('Cargando') );
        expect( screen.getByText('Información de Pokémon') );

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});

        //console.log(nextButton.disabled);
        
        expect( nextButton.disabled).toBeFalsy;

    });


    test('debe de mostrar un Pokemon', () => { 

        useFetch.mockReturnValue({
            data: 
                {
                    id: '1', 
                    name:'Pikachu',
                    sprites: {
                        front_default: "back_default",
                        front_shiny: "back_shiny",
                        back_default: "front_default",
                        back_shiny: "front_shiny",
                    }
                },
            hasError: null, 
            isLoading: false
        });

        render(<MultipleCustomHooks /> );

        //screen.debug();

        expect( screen.getByText('Pikachu')).toBeTruthy();
        expect( screen.getByText(`#1 - Pikachu`)).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        expect( nextButton.disabled).toBeFalsy;

    });


    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: 
                {
                    id: '1', 
                    name:'Pikachu',
                    sprites: {
                        front_default: "back_default",
                        front_shiny: "back_shiny",
                        back_default: "front_default",
                        back_shiny: "front_shiny",
                    }
                },
            hasError: null, 
            isLoading: false
        });


        render(<MultipleCustomHooks /> );

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });


});
