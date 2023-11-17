// import { useParams } from "react-router-dom";
// import { useSneakerContext } from "../provider/SneakerContext";
// import { Container, Row, Card } from "react-bootstrap";

// export default function DetailSneaker() {
//     const { id } = useParams();
//     const { sneakers } = useSneakerContext();

//     if (!sneakers || sneakers.length === 0) {
//         return <div>Loading...</div>;
//     }

//     const selectedSneaker = sneakers.find(
//         (sneaker) => sneaker.id === Number(id)
//     );

//     if (!selectedSneaker) {
//         return <div>Shoe not found</div>;
//     }

//     const { name, price, color, image, detail } = selectedSneaker;

//     return (
//         <Container>
//             <Row className="justify-content-center">
//                 <Card
//                     style={{
//                         width: "35rem",
//                         padding: 0,
//                         marginTop: "40px",
//                         marginBottom: "40px",
//                     }}
//                 >
//                     <Card.Img
//                         variant="top"
//                         src={image}
//                         style={{
//                             maxWidth: "100%",
//                             maxHeight: "400px",
//                             width: "auto",
//                             height: "auto",
//                             objectFit: "cover",
//                         }}
//                     />
//                     <Card.Body>
//                         <Card.Title>{name}</Card.Title>
//                         <Card.Title style={{ fontSize: "18px", color: "grey" }}>
//                             {price}
//                         </Card.Title>
//                         <Card.Text style={{ fontWeight: 500 }}>
//                             Colour Shown: {color}
//                         </Card.Text>
//                         <Card.Text style={{ textAlign: "justify" }}>
//                             {detail}
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </Row>
//         </Container>
//     );
// }
