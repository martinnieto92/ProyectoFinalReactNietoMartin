import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar=()=> {
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to='/'>
                    <h1 className="navbar-item">Tienda RIVER</h1>
                    </Link>
                </div>
                <div className="navbar-menu pl-6">
                    <div className="Categories">
                        <NavLink to={`/category/buzo`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Buzo</NavLink>
                        <NavLink to={`/category/camiseta`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Camiseta</NavLink>
                        <NavLink to={`/category/pantalon`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Pantalon</NavLink>
                        {/* <button className="navbar-item">Buzo</button>
                        <button className="navbar-item">Camiseta</button>
                        <button className="navbar-item">Pantalon</button>  */}
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