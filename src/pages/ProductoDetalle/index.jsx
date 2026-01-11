import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, Badge, Card, ListGroup, ButtonGroup } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Products from "../../date/products.json";
import "./ProductDetalle.css";

const ProductoDetalle = () => {
  const { nombre } = useParams();
  const producto = Products.find(p => p.nombre === nombre);

  const [selected, setSelected] = useState("");
  const [fade, setFade] = useState(false);
  const [qty, setQty] = useState(1);

  // Actualizar la imagen principal cuando cambie el producto
  useEffect(() => {
    if (producto) setSelected(producto.imagen);
  }, [producto]);

  if (!producto) {
    return (
      <Container className="py-5 text-light" style={{ background: "#0b1323" }}>
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  // Combina imagen principal + subimagenes y asegura que sea un array
  const todasImagenes = [producto.imagen, ...(producto.subimagenes || [])];

  return (
    <Container className="py-5 text-light" style={{ background: "#0b1323" }}>
      <Row>
        {/* Columna de imágenes */}
        <Col md={6}>
          <Card className="bg-dark border-0">
            <Image
              src={selected}
              fluid
              rounded
              className={`main-image ${fade ? "fade" : ""}`}
            />
          </Card>

          <div
            className="d-flex gap-2 mt-3 overflow-auto"
            style={{ maxHeight: 130 }}
          >
            {todasImagenes.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                thumbnail
                rounded
                onMouseEnter={() => {
                  setFade(true);
                  setTimeout(() => {
                    setSelected(img);
                    setFade(false);
                  }, 200);
                }}
                style={{
                  width: 100,
                  height: 100,
                  flexShrink: 0,
                  cursor: "pointer",
                  border: img === selected ? "2px solid #0d6efd" : "1px solid #222",
                  objectFit: "cover"
                }}
              />
            ))}
          </div>
        </Col>

        {/* Columna de información */}
        <Col md={6}>
          {producto.nuevo && <Badge bg="primary" className="mb-2">New Release</Badge>}

          <h1 className="fw-bold">{producto.nombre}</h1>

          <div className="mb-2">
            ⭐⭐⭐⭐⭐ <small>{producto.rating} ({producto.reviews} reviews)</small>
          </div>

          <h2 className="text-info fw-bold">${producto.precio_real}</h2>

          <p className="text-secondary">{producto.descripcion}</p>

          {/* Specs */}
          <Card bg="dark" className="mt-3">
            <Card.Header className="fw-bold">Technical Specifications</Card.Header>
            <ListGroup variant="flush">
              {producto.specs && producto.specs.map((spec, idx) => (
                <ListGroup.Item key={idx} className="bg-dark text-light">{spec}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>

          {/* Cantidad + Botón */}
          <div className="d-flex align-items-center mt-4 gap-3">
            <ButtonGroup>
              <Button variant="secondary" onClick={() => setQty(q => Math.max(1, q - 1))}>-</Button>
              <Button variant="outline-light" disabled>{qty}</Button>
              <Button variant="secondary" onClick={() => setQty(q => q + 1)}>+</Button>
            </ButtonGroup>

            <Button size="lg" variant="primary">Add to cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductoDetalle;
