import { Container, Row, Col } from "react-bootstrap";
// import { useSneakerContext } from "../provider/SneakerContext";
import { useNavigate } from "react-router-dom";
import { ShoesContext } from "../provider/ShoesContext";
import { useContext, useEffect } from "react";
export default function Homepage() {
    const { isLoggedIn } = useContext(ShoesContext);
    const navigate = useNavigate();
    useEffect(() => {
        function validatePage() {
            if (!isLoggedIn) {
                navigate("/start");
            }
        }
        validatePage();
    }, []);
    return (
        <div>
            <header
                className="bg-dark text-light p-4"
                style={{
                    background:
                        'url("https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "650px",
                }}
            >
                <Container>
                    <Row className="vh-100 d-flex align-items-center">
                        <Col className="col-md-4">
                            <h1 style={{ color: "black" }}>SneakerSphere</h1>
                            <p style={{ color: "black", textAlign: "justify" }}>
                                Selamat datang di SneakerSphere, destinasi utama
                                untuk para pecinta sepatu sneaker yang tidak
                                hanya mencari gaya, tetapi juga kualitas dan
                                kenyamanan. Sejak didirikan, SneakerSphere telah
                                menjadi pusat bagi para penggemar sepatu
                                olahraga yang mengutamakan gaya hidup aktif dan
                                berjiwa muda.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}
