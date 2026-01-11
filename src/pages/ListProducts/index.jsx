import React from 'react';
import './ListProducts.css'; // Asegúrate de crear este archivo CSS

const mockProducts = [
  {
    id: 1,
    name: "Nexus Pro 16 Ultra",
    price: 2499.00,
    rating: 4.9,
    badge: "NEW ARRIVAL",
    specs: "M3 ExtremeChip, 64GB Unified Memory, 2TB SSD, ProMotion Liquid Retina XDR",
    image: "https://images.unsplash.com/photo-1611078489935-0cb4c2497a00?w=800",
  },
  {
    id: 2,
    name: "Quantum ANC-X1",
    price: 349.00,
    rating: 4.8,
    badge: "PREMIUM",
    specs: "Active Noise Cancellation, 40-hour Battery, High-Res Audio Wireless Certified",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: 3,
    name: "Titan RTX 5090 Ti",
    price: 1899.00,
    rating: 5.0,
    badge: "",
    specs: "Next-gen architecture, 32GB GDDR7, DLSS 4.0 Support, Liquid Cooling Ready",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800",
  },
  {
    id: 4,
    name: "Aero Strike Elite Pad",
    price: 129.00,
    rating: 4.8,
    badge: "",
    specs: "Haptic Feedback, Mechanical Switches, Customizable RGB, 0.5ms Response",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=800",
  },
  {
    id: 5,
    name: "Nexus Studio Display",
    price: 1399.00,
    rating: 4.7,
    badge: "SALE",
    specs: "32-inch 8K HDR, Mini-LED Technology, 1600 nits Peak Brightness, 120Hz",
    image: "https://images.unsplash.com/photo-1588109273901-15e94e49c543?w=800",
  },
  {
    id: 6,
    name: "Quantum Velocity 4TB",
    price: 420.00,
    rating: 4.9,
    badge: "",
    specs: "External NVMe SSD, 20000MB/s, Read/Write, Rugged IP67 Protection",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
];

const ListProducts = () => {
  return (
    <div className="list-products-container">
      <aside className="filters-sidebar">
        <h2 className="filters-title">Filters</h2>
        <p className="filters-subtitle">Refine your tech arsenal</p>

        <div className="filter-section">
          <h3>PRICE RANGE</h3>
          <div className="price-range-slider">
            <input
              type="range"
              min="100"
              max="5000"
              defaultValue="2500"
              className="slider"
            />
            <div className="price-values">
              <span>$100</span>
              <span>$5,000</span>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h3>CATEGORIES</h3>
          <ul className="filter-list">
            <li>
              <input type="checkbox" id="laptops" defaultChecked />
              <label htmlFor="laptops">Laptops</label>
            </li>
            <li>
              <input type="checkbox" id="audio" />
              <label htmlFor="audio">Audio Gear</label>
            </li>
            <li>
              <input type="checkbox" id="gaming" />
              <label htmlFor="gaming">Gaming Essentials</label>
            </li>
            <li>
              <input type="checkbox" id="components" />
              <label htmlFor="components">PC Components</label>
            </li>
          </ul>
        </div>

        <div className="filter-section">
          <h3>BRANDS</h3>
          <ul className="filter-list">
            <li><input type="checkbox" id="nexus-elite" /><label htmlFor="nexus-elite">Nexus Elite</label></li>
            <li><input type="checkbox" id="quantum" /><label htmlFor="quantum">Quantum</label></li>
            <li><input type="checkbox" id="titan-pro" /><label htmlFor="titan-pro">Titan Pro</label></li>
            <li><input type="checkbox" id="aero-design" /><label htmlFor="aero-design">Aero Design</label></li>
          </ul>
        </div>

        <button className="reset-filters">Reset All Filters</button>
      </aside>

      <main className="products-content">
        <div className="products-header">
          <div className="showing-info">
            Showing <strong>1,245</strong> products
          </div>
          <div className="sort-section">
            Sort by:
            <select defaultValue="newest">
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {mockProducts.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <span className={`badge ${product.badge.toLowerCase().replace(" ", "-")}`}>
                  {product.badge}
                </span>
              )}
              
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">★ {product.rating.toFixed(1)}</div>
                <p className="product-specs">{product.specs}</p>
                <div className="product-price">
                  ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn">←</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="dots">...</span>
          <button className="page-btn">24</button>
          <button className="page-btn">→</button>
        </div>
      </main>
    </div>
  );
};

export default ListProducts;