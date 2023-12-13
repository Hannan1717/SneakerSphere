// SignUp.jsx
import { useState, useEffect } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { useSneakerContext } from "../../provider/SneakerContext";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SignUp = () => {
    const { isLoggedIn, setLoggedIn } = useSneakerContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    console.log(isLoggedIn);
    const navigate = useNavigate();

    const signUpclik = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setLoggedIn(true);
                localStorage.setItem("isLoggedIn", "true");
                console.log("Success Sign Up");
                // ...
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);

        // Check if confirm password matches the password
        setPasswordMatchError(confirmPasswordValue !== password);
    };

    useEffect(() => {
        // Jika sudah SignUp, langsung arahkan ke halaman utama
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
                        SignUp
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

                        <Form.Group controlId="confirmpassword">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Confirm Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                            </FloatingLabel>
                            {passwordMatchError && (
                                <div style={{ color: "red" }}>
                                    Passwords do not match.
                                </div>
                            )}
                        </Form.Group>

                        <Button
                            variant="outline-primary"
                            type="button"
                            onClick={signUpclik}
                        >
                            Create Account
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SignUp;
