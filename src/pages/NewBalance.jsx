import { Container, Row } from "react-bootstrap";
import CardSneaker from "../components/CardSneaker";
import { useSneakerContext } from "../provider/SneakerContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function NewBalance() {
    const { sneakers, isLoggedIn } = useSneakerContext();
    const navigate = useNavigate();

    useEffect(() => {
        function validatePage() {
            if (!isLoggedIn) {
                navigate("/login");
            }
        }
        validatePage();
    }, [isLoggedIn]);
    return (
        <Container style={{ paddingTop: "40px" }}>
            <Row className="justify-content-between">
                {sneakers.map((item) => (
                    <CardSneaker
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </Row>
        </Container>
    );
}
