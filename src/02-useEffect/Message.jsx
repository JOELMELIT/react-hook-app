import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})

    useEffect(() => {
      console.log('Message Mounted!');
      
      const onMouseMove = ({ x, y}) => {
        const coords1 = { x, y };
        //console.log(coords);
        setCoords(coords1);
      }  

      window.addEventListener('mousemove', onMouseMove );
    
      return () => {
        console.log('Message UnMounted!');

        window.removeEventListener('mousemove', onMouseMove );
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify(coords) }
    </>
  )
}
