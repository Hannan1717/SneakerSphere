/* eslint-disable react/prop-types */
import { FloatingLabel, Form } from "react-bootstrap";

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <FloatingLabel
            style={{ marginLeft: "-13px" }}
            controlId="floatingInput"
            label="Search by name"
            className="mb-3"
        >
            <Form.Control
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </FloatingLabel>
    );
}
