import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ id, name, img, price, stock }) => {
return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={name} />
        <h3>Nombre: {name} </h3>
        <p>Precio:{price} </p>
        <p>ID: {id} </p>
        <p>Stock: {stock} </p>
        <Link className='miBtn' to={`/item/${id}`} > Ver Detalles </Link>
    </div>    
    );
}

export default Item;
