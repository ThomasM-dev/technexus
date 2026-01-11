import { Trash2, ChevronLeft, Lock } from 'lucide-react';
import { useState } from 'react';

const Carrito = () => {
  const [promoCode, setPromoCode] = useState('NEXUS2024');

  
  const items = [
    {
      name: 'Nexus Pro Laptop M3',
      description: '18-inch, 1TB SSD, 32GB RAM, Space Gray',
      price: 2499.00,
      quantity: 1,
      image: '/images/laptop-spacegray.jpg', 
    },
    {
      name: 'CyberBuds Ultra',
      description: 'Active Noise Cancelling, Electric Blue',
      price: 598.00,
      quantity: 1,
      image: '/images/cyberbuds-blue.jpg',
    },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="container py-5" style={{ maxWidth: '1100px' }}>
      <div className="bg-dark text-white rounded-3 p-4 p-md-5 shadow">
        {/* Título */}
        <h1 className="fs-2 fw-bold mb-1">YOUR CART</h1>
        <p className="text-secondary mb-5">
          You have {items.length} {items.length === 1 ? 'Item' : 'Items'} in your bag.
        </p>

        <div className="row g-5">
          {/* Items */}
          <div className="col-lg-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="card bg-dark border-secondary mb-4 overflow-hidden"
              >
                <div className="row g-0 align-items-center">
                  {/* Imagen */}
                  <div className="col-4 col-md-3">
                    <div
                      className="bg-black ratio ratio-1x1"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="col-8 col-md-9 p-3 p-md-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h5 className="card-title mb-1 fw-semibold">{item.name}</h5>
                        <p className="text-secondary mb-3 small">{item.description}</p>
                      </div>
                      <button className="btn btn-sm btn-link text-danger p-0">
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center bg-dark border border-secondary rounded-pill px-2 py-1">
                        <button className="btn btn-sm btn-link text-white p-0 px-2">-</button>
                        <span className="px-3 fw-medium">{item.quantity}</span>
                        <button className="btn btn-sm btn-link text-white p-0 px-2">+</button>
                      </div>

                      <span className="fs-5 fw-bold text-primary ms-auto">
                        ${item.price.toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4">
              <a href="#" className="text-primary text-decoration-none d-inline-flex align-items-center gap-2">
                <ChevronLeft size={18} />
                CONTINUE SHOPPING
              </a>
            </div>
          </div>

          {/* Resumen */}
          <div className="col-lg-4">
            <div className="card bg-black border-secondary p-4 sticky-top" style={{ top: '2rem' }}>
              <h5 className="fw-semibold mb-4 d-flex justify-content-between align-items-center">
                Summary
                <i className="bi bi-info-circle text-secondary" />
              </h5>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary">Subtotal</span>
                <span>${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary">Estimated Shipping</span>
                <span className="text-success">FREE</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-secondary">Tax (10%)</span>
                <span>${tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>

              <hr className="border-secondary" />

              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="fs-4 fw-bold">TOTAL</span>
                <span className="fs-3 fw-bold text-primary">
                  ${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>

              <button className="btn btn-primary btn-lg w-100 mb-4 fw-semibold d-flex align-items-center justify-content-center gap-2">
                PROCEED TO CHECKOUT
                <Lock size={18} />
              </button>

              {/* Promotional Code */}
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control bg-dark border-secondary text-white"
                  placeholder="Promotional code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="btn btn-outline-light" type="button">
                  APPLY
                </button>
              </div>

              <div className="mt-4 small text-secondary text-center">
                Secure checkout powered by NexusPay. Your data is encrypted with military-grade standards.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-muted mt-5 small">
        © 2024 TechNexus Digital Industries. All rights reserved.
      </div>
    </div>
  );
};

export default Carrito;