import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router";


describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el HomePage', () => {

        render(
            // El MemoryRouter ya nos proporciona los elementos necesarios, useHref, useLocation, etc..  para nuestras pruebas para pode emular el <BrowserRouter/>
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        ); 

        expect( screen.getByText('HomePage') ).toBeTruthy();
        //screen.debug();
    });


    test('debe de mostrar el LoginPage', () => {

        render(
            // El MemoryRouter ya nos proporciona los elementos necesarios para nuestras pruebas para pode emular el <BrowserRouter/>
            <MemoryRouter initialEntries={ ['/login'] }>
                <MainApp/>
            </MemoryRouter>
        ); 

        expect( screen.getByText('LoginPage') ).toBeTruthy();
        screen.debug();
    });

});