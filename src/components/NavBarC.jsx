import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';

function NavBarC() {
    return (
        <div >
            <Navbar expand="lg" fixed='top' style={{ width: '100%', zIndex: 90000 }} className="zindex-fixed shadow p-3 bg-body-tertiary">
                <Container >
                    <Navbar.Brand href="#"> <img src={logo} width="25" height="25" alt="Logo" />Youtube Shorts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid style={{ position: 'sticky', top: 0, zIndex: 80000 }}>
                {/* Your content goes here */}
            </Container>
        </div>
    );
}

export default NavBarC;
