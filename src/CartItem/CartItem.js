
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const subtotal = price * quantity;
   
    const handleRemoveItem = () => {
        removeItem(id);
    };

    return (
        <div className="CartItem">
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${subtotal}</p>
            <p onClick={handleRemoveItem}>
            </p>
        </div>
    );
};

export default CartItem;
