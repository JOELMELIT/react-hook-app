import { useEffect, useState } from "react"

const localCache = {};

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFetch();
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }
    

    // Petición HTTP
    const getFetch = async () =>{

        //console.log(localCache);

        if(localCache[url]){
            console.log('Usando caché')
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        setLoadingState();

        const response = await fetch(url);

        // sleep
        await new Promise( resolve => setTimeout(resolve, 1500) );

        if(!response.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,        // Tanto status como statusText son variables de retorno de la respuesta(predefinidos) en caso de un error
                    message: response.statusText,
                },
            });
            return;
        }

        const data = await response.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        });
        console.log({data})

        // Manejo de caché
        localCache[url] = data;

;    }
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
