import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {


  return (
    /*<>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/login" >Login</Link>
    </>*/

    <nav className="navbar navbar-expand navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand fw-bold" >useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    {/* El Componente NavLink nos porporciona unos argumentos dentro de los cuales el isActive es utilizado por el NavLink para saber si estas posicionado o no en la pagina especificada en el to=..., el isActive retorna true o false*/}
                    <NavLink   // El NavLink es un HOC - Higher Order Component
                        to="/" 
                        className={ (args) => `nav-link ${ args.isActive ? 'active' : ''} `}                
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about" 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''} `}                
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login" 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''} `}                
                    >
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>

  )
}
