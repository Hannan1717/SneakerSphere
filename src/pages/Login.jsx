// Login.jsx
import { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { useSneakerContext } from "../provider/SneakerContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const { handleLogin, isLoggedIn } = useSneakerContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(isLoggedIn);
    const navigate = useNavigate();
    const handleLoginClick = async () => {
        await handleLogin(username, password);
        navigate("/");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "500px" }}>
                <Card.Body>
                    <Card.Title
                        className="mb-3"
                        style={{ textAlign: "center", fontSize: "27px" }}
                    >
                        Login
                    </Card.Title>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Button
                            variant="outline-primary"
                            type="button"
                            onClick={handleLoginClick}
                        >
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
