import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";



const NavBar=()=> {
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-brand hola">
                    <Link to='/'>
                    <a className="navbar-item logo">
                        <img src="https://www.tiendariver.com/arquivos/newLogo_1200x300_rojoynegro.png?v=637838351505300000" />
                    </a>
                    </Link>
                </div>
                <div id="navbarBasicExample" className="navbar-menu hola">
                    <div className="navbar-start">
                        <a className="navbar-item letra">
                            <NavLink to={`/category/buzos`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Buzo</NavLink>
                        </a>
                        <a className="navbar-item letra">    
                            <NavLink to={`/category/camiseta`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Camiseta</NavLink>
                        </a>
                        <a className="navbar-item letra">    
                            <NavLink to={`/category/pantalon`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Pantalon</NavLink>
                        </a>
                    </div>
                    <div className="navbar-end pr-6">
                        <div className="navbar-item">
                        <CartWidget/>
                        </div>
                    </div>
                </div>         
            </nav>
        
        </div>
    )
}

export default NavBar;