import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;       
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,  // aqui va a tener las variables de username email y password que exponemos al exterior haciendo el return del mismo
        formState,
        onInputChange,
        onResetForm,
    }

}
