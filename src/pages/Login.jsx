import { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
// import { useSneakerContext } from "../provider/SneakerContext";
import { ShoesContext } from "../provider/ShoesContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(ShoesContext);
    console.log(isLoggedIn);

    // const { setLoggedIn } = useSneakerContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3001/login");
            if (response.ok) {
                const userDataArray = await response.json();
                if (userDataArray.length > 0) {
                    const dataUser = userDataArray[0];
                    if (
                        dataUser.username === username &&
                        dataUser.password === password
                    ) {
                        setIsLoggedIn(true);
                        console.log(isLoggedIn);
                        console.log("Success login");
                        navigate("/");
                    } else {
                        console.error("Gagal login");
                    }
                } else {
                    console.error("Data user tidak ditemukan");
                }
            } else {
                console.error("Gagal login");
            }
        } catch (error) {
            console.error("Terjadi kesalahan", error);
        }
    };

    useEffect(() => {
        function validatePage() {
            if (isLoggedIn) {
                navigate("/");
            }
        }
        validatePage();
    }, []);
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
                            onClick={handleLogin}
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
