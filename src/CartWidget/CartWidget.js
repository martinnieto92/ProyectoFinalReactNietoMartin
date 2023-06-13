import cart from '../img/carrito.jpg'

function CartWidget(){
    return (
        <div>
            <img src={cart} width="40" alt="cart-wodget"/>
            0
        </div>
    )
}

export default CartWidget;