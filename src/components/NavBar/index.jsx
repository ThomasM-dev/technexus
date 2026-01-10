import { Image } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProductCard from '../ProductCard';
import UserAcount from '../UserAcount';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg d-flex">
            <Container fluid>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" className="w-100 d-flex">



                    <div className="d-flex justify-content-center flex-grow-1 mx-4 w-50">
                        <div className="d-flex align-items-center me-5">
                            <Image
                                src="/logo_sitio.png"
                                alt="Logo"
                                width="30"
                                height="30"
                                className="me-2"
                            />
                            <Navbar.Brand href="#" className="text-white" style={{ fontWeight: 600 }}>
                                TechNexus
                            </Navbar.Brand>
                        </div>
                        <div
                            className="d-flex align-items-center px-2"
                            style={{
                                width: "35%",
                                backgroundColor: "#0F131A",
                                borderRadius: "500px",
                                height: "42px",
                                color: "#7D8A9C",
                                marginLeft: "25px",
                                marginRight: "15px"
                            }}
                        >
                            <span className="me-2" style={{ paddingLeft: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></span>

                            <Form.Control
                                type="search"
                                placeholder="Search devices, accessories..."
                                aria-label="Search"
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    boxShadow: "none",
                                    color: "#fff"
                                }}
                            />
                        </div>



                        <Nav className="d-flex align-items-center ms-5" style={{ fontWeight: 500 }} >

                            <Nav.Link href="#action1" className="text-white mx-2">Laptops</Nav.Link>
                            <Nav.Link href="#action2" className="text-white mx-2">Audio</Nav.Link>
                            <Nav.Link href="#" className="text-white mx-2">Gaming</Nav.Link>
                            <Nav.Link href="#" className="text-white mx-2">Deals</Nav.Link>

                            <Nav.Link href="#" className="text-white mx-2">
                                <ProductCard />
                            </Nav.Link>

                            <Nav.Link href="#" className="text-white mx-2">
                                <UserAcount />
                            </Nav.Link>

                        </Nav>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
