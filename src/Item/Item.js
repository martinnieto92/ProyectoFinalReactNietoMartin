import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ id, name, img, price, stock }) => {
return (
    <div className="card-container pepe">
        <div className="card pepe" style={{ width: "250px", height: "250px" }}>
            <div className="card-image">
              <figure className="image is-1by1">
                <img src={img} alt={name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                {/* <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div> */}
                <div className="media-content">
                  <p className="title is-4">{name}</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
              <div className="content">
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
              </div>
        </div>
            <footer className="card-footer">
                <Link to={`/item/${id}`} className="card-footer-item">Ver detalle</Link>
            </footer>
        </div>
    </div>
);
}

export default Item;
