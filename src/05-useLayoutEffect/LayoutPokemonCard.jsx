import { useState } from 'react';
import { useLayoutEffect, useRef } from 'react'

export const LayoutPokemonCard = ({id, name, sprites = []}) => {

  // useLayoutEffet - La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas las mutaciones de DOM. Las actualizaciones programadas dentro de useLayoutEffect se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.
  const h1Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width:0, height: 0});
  useLayoutEffect(() => {
    const { height, width } = h1Ref.current.getBoundingClientRect();
    //console.log(h1Ref.current.getBoundingClientRect());
    setBoxSize({height, width})
  }, [name])


  return (

    <>
      <section style={{height: 200}}>
          <h2 ref={ h1Ref } className="text-capitalize"> #{id} - {name}</h2>

          {/* Imágenes */}
          <div>
              {
                  sprites.map( sprite => (
                      <img key={ sprite } src={ sprite }  alt={ name }/>
                  ))
              }
          </div>
      </section>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

