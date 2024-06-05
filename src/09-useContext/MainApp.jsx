import { UserProvider } from './context/UserProvider';

import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (

    <UserProvider>
      {/* <h1>MainApp</h1> */}
      {/* 
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/login" >Login</Link>
      */}
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element= { <HomePage />}/>
        <Route path="login" element= { <LoginPage />}/>
        <Route path="about" element= { <AboutPage />}/>

        {/* Usamos el WildCard/Comodin para en caso de que se escriba una ruta que no exista nos lleve al LoginPage*/}
        {/* <Route path="/*" element={ <LoginPage />} /> */}

        {/* Otra Forma de hacerlo es mediate el componente Navigate del react-router-dom, y esto componente una ves que renderiza toda la pagina ya puede hacer la navegación al path que especificamos*/}
        <Route path="/*" element={ <Navigate to="/about"/> } />
      </Routes>

    </UserProvider>
    
  )
}
