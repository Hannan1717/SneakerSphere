// import { useState } from "react";
// import { Container, Row } from "react-bootstrap";
// import CardSneaker from "../components/CardSneaker";
// import SearchBar from "../components/SearchBar";
// import PaginationButtons from "../components/PaginationButtons";
// import { useSneakerContext } from "../provider/SneakerContext";

// export default function Nike() {
//     const { sneakers, isLoggedIn } = useSneakerContext();
//     const [searchTerm, setSearchTerm] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const sneakersPerPage = 5; // Jumlah sepatu per halaman
//     console.log(isLoggedIn);
//     // Searching logic
//     const filteredSneakers = sneakers.filter((sneaker) =>
//         sneaker.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // pagination logic
//     const indexOfLastSneaker = currentPage * sneakersPerPage;
//     const indexOfFirstSneaker = indexOfLastSneaker - sneakersPerPage;
//     const currentSneakers = filteredSneakers.slice(
//         indexOfFirstSneaker,
//         indexOfLastSneaker
//     );

//     // Render komponen Nike
//     return (
//         <Container style={{ paddingTop: "40px" }}>
//             <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//             <Row className="justify-content-between">
//                 {currentSneakers.map((item) => (
//                     <CardSneaker
//                         key={item.id}
//                         id={item.id}
//                         image={item.image}
//                         name={item.name}
//                         price={item.price}
//                     />
//                 ))}
//             </Row>
//             {/* Paginasi */}
//             <PaginationButtons
//                 totalPages={Math.ceil(
//                     filteredSneakers.length / sneakersPerPage
//                 )}
//                 setCurrentPage={setCurrentPage}
//             />
//         </Container>
//     );
// }
