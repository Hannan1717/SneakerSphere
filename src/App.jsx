import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailSneaker from "./components/DetailSneaker";
import Nike from "./pages/Nike";
import NewBalance from "./pages/NewBalance";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { useSneakerContext } from "./provider/SneakerContext";
import { Navigate } from "react-router-dom";

function App() {
    const { isLoggedIn } = useSneakerContext();

    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLoggedIn ? <Homepage /> : <Navigate to="/login" />
                        }
                    />
                    <Route
                        path="/nike"
                        element={
                            isLoggedIn ? <Nike /> : <Navigate to="/login" />
                        }
                    />
                    <Route
                        path="/newBalance"
                        element={
                            isLoggedIn ? (
                                <NewBalance />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/detailsneaker/:id"
                        element={<DetailSneaker />}
                    />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
