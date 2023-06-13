import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return(
        <div>
            <nav>
                <h1>Tienda RIVER</h1>
                <div>
                    <button>Buzo</button>
                    <button>Camiseta</button>
                    <button>Pantalon</button>
                    <div class="navbar-end">
                        <div class="navbar-item">
                        <CartWidget/>
                        </div>
                    </div>
                </div>            
            </nav>
        
        </div>
    )
}

export default NavBar;