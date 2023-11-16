import { Container, Row } from "react-bootstrap";
import CardSneaker from "../components/CardSneaker";
import { useSneakerContext } from "../provider/SneakerContext";

export default function NewBalance() {
    const { sneakers } = useSneakerContext();

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
