import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
// import DetailSneaker from "./components/DetailSneaker";
// import Nike from "./pages/Nike";
// import NewBalance from "./pages/NewBalance";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
// import { useSneakerContext } from "./provider/SneakerContext";
import { Navigate } from "react-router-dom";
import { ShoesContext } from "./provider/ShoesContext";
import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const { isLoggedIn } = useSneakerContext();

    return (
        <ShoesContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <Router>
                <Navigation />
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLoggedIn ? <Homepage /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/nike" element={<Homepage />} />
                    <Route
                        path="/newBalance"
                        element={
                            isLoggedIn ? <Homepage /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/detailsneaker/:id" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </ShoesContext.Provider>
    );
}

export default App;
