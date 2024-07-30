import { fireEvent, getByLabelText, getByRole, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en el componente <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Realizar Tareas Escolares',
        done: false
    }

    const onToggleTodoMock = jest.fn();
    const onDeleteTodoMock = jest.fn();

    // Esto funciona para que en cada una de los test realizados se resetee las funciones onToggleTodoMock, onDeleteTodoMock
    beforeEach(() => {
        jest.clearAllMocks();
    });



    test('debe de mostrar el TODO pendiente de completar', () => {

        render(
            <TodoItem 
                todo= { todo } 
                onToggleTodo= { onToggleTodoMock } 
                onDeleteTodo= { onDeleteTodoMock }
            />
        );
        
        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('spann');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

        //screen.debug();
    });


    test('debe de mostrar el TODO completado', () => {

        todo.done = true;

        render(
            <TodoItem 
                todo= { todo } 
                onToggleTodo= { onToggleTodoMock } 
                onDeleteTodo= { onDeleteTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('spann');
        expect( spanElement.className ).toContain('text-decoration-line-through');
        //screen.debug();
    });


    test('span debe de llamar el ToggleTodo cuando se hace click', () => {

        render(
            <TodoItem 
                todo= { todo } 
                onToggleTodo= { onToggleTodoMock } 
                onDeleteTodo= { onDeleteTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('spann');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });


    test('button debe de llamar el deleteTodo', () => {

        render(
            <TodoItem 
                todo= { todo } 
                onToggleTodo= { onToggleTodoMock } 
                onDeleteTodo= { onDeleteTodoMock }
            />
        );
        

        screen.debug(); 

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    


});