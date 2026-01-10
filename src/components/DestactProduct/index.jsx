import Products from "../../date/products.json";
import "./DestactProduct.css";

const DestactProduct = () => {
  const Destact = Products.slice(0, 4);

  return (
    <div className="destact-container d-flex container mt-5 mb-5 gap-4">
      {Destact.map((item) => (
        <div key={item.id} className="product-card">
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

            <button className="add-to-cart-btn">
              <span className="cart-icon">🛒</span>
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestactProduct;
