import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function CardSneaker(prop) {
    return (
        <Card style={{ width: "14rem", padding: 0, marginBottom: "20px" }}>
            <Card.Img
                variant="top"
                src={prop.image}
                style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    width: "auto",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
            <Card.Body>
                <Card.Title>{prop.name}</Card.Title>
                <Card.Text>{prop.price}</Card.Text>
                <Link to={`/detailsneaker/${prop.id}`}>
                    <Button variant="primary">Detail</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
