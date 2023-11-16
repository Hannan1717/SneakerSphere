/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

export default function PaginationButtons({ totalPages, setCurrentPage }) {
    return (
        <div>
            {Array.from({ length: totalPages }, (_, index) => (
                <Button
                    className="primary"
                    style={{ marginRight: "2px" }}
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </Button>
            ))}
        </div>
    );
}
