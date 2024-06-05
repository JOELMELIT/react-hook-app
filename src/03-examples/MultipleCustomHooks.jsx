import { useCounter, useFetch } from "../hooks"  // En el archivo de barril definimos el useFetch que en auntomatico se toma
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
        <h1>Información de Pokémon</h1>
        <hr />

        { isLoading 
            ? 
            <LoadingMessage /> 
            :(
                <PokemonCard 
                    id={ data?.id } 
                    name={data?.name} 
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                />
            )
        }

        {/* Con el simbolo ? se interpreta: Si tienemos data, busca el name*/}
        <h2>{ data?.name }</h2>

        <button
            className="btn btn-primary mt-2"
            onClick={ () => counter > 1 ? decrement() : null}
        >Anterior</button>
        <button
            className="btn btn-primary mt-2"
            onClick={ () => increment() }
        >Siguiente</button>

        <hr />

        {/* <pre>{ JSON.stringify( data, null, 2) }</pre> */}
    </>
  )

}
