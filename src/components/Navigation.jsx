import { Container, Nav, Navbar } from "react-bootstrap";
import { useSneakerContext } from "../provider/SneakerContext";
import { useNavigate, NavLink } from "react-router-dom";

export default function Navigation() {
    const { isLoggedIn, setLoggedIn } = useSneakerContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        console.log(isLoggedIn);
        localStorage.clear();
        navigate("/login");
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <NavLink
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "black",
                        }}
                    >
                        SneakerSphere
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink
                                to="/nike"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                Nike
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/newBalance"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                New Balance
                            </NavLink>
                        </Nav.Link>
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
