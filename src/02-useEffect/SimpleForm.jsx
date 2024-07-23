import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'JOELMESA',
        email: 'joelmelendez.it@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value  // Propiedad computada de los objetos
        });
    }


    useEffect(() => {
        //console.log('useEffect called!');
    },[]);

    useEffect(() => {
        //console.log('formState changed!');
    },[formState]);

    useEffect(() => {
        //console.log('email changed!');
    },[email]);


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <div className="form-floating">
            <input 
                type="text" 
                className="form-control mt-2 form-floating"
                placeholder="Username"
                name="username"
                id="labelUser"
                value={ username }
                onChange={ onInputChange }
            />
            <label htmlFor="labelUser" >Nombre</label>
        </div>
        <div className="form-floating">
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="joel-tec@outlook.com"
                name="email"
                id="userEmail"
                value={ email }
                onChange={ onInputChange }
            />
            <label htmlFor="userEmail" >Correo</label>
        </div>

        {/* Este mensaje lo quiero mostrar solo si el username es DONJOEL*/}
        {
            (username === 'DONJOEL') && <Message />
        }
        
    </>
  )
}
