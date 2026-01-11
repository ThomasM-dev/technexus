import { Link } from "react-router-dom";
import Products from "../../date/products.json";
import "./DestactProduct.css";

const DestactProduct = () => {
  const Destact = Products.slice(0, 4);

  return (
    <div className="destact-container d-flex container mt-5 mb-5 gap-4">
      {Destact.map((item) => (
        <Link key={item.id} className="product-card" to={`/producto/${item.nombre}`} item={item}>
          <div className="product-image-container">
            <img
              src={item.imagen}
              alt={item.name}
              className="product-image"
            />
          </div>

          <div className="product-info">
            <div className="category">{item.categoria}</div>

            <div className="rating">
              <span className="star">★</span>
              <span className="rating-value">{item.rating}</span>
            </div>

            <h2 className="product-name">{item.nombre}</h2>

            <div className="price">${item.precio_real}</div>

            <div className="promotion">{item.promotion}</div>
            <button className="add-to-cart-btn">
              <span className="cart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg></span>
              Agregar al carrito
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DestactProduct;
