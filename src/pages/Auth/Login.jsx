// Login.jsx
import { useState, useEffect } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { useSneakerContext } from "../../provider/SneakerContext";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Login = () => {
    const { isLoggedIn, setLoggedIn } = useSneakerContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(isLoggedIn);
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential.user);
                setLoggedIn(true);
                localStorage.setItem("isLoggedIn", "true");
                console.log("Success login");
                // ...
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        // Jika sudah login, langsung arahkan ke halaman utama
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

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
                        <Form.Group controlId="formemail">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="email"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            onClick={signIn}
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
