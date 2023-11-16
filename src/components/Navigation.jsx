import { Container, Nav, Navbar } from "react-bootstrap";
import { useSneakerContext } from "../provider/SneakerContext";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
    const { isLoggedIn, setLoggedIn } = useSneakerContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        console.log(isLoggedIn);
        navigate("/login");
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">SneakerSphere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/nike">Nike</Nav.Link>
                        <Nav.Link href="/newbalance">New Balance</Nav.Link>
                        <button
                            className="btn btn-outline-danger"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
