import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailSneaker from "./components/DetailSneaker";
import Nike from "./pages/Nike";
import NewBalance from "./pages/NewBalance";
import Homepage from "./pages/Homepage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { SneakerProvider } from "./provider/SneakerContext";

function App() {
    return (
        <>
            <Router>
                <SneakerProvider>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/nike" element={<Nike />} />
                        <Route path="/newBalance" element={<NewBalance />} />
                        <Route
                            path="/detailsneaker/:id"
                            element={<DetailSneaker />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </SneakerProvider>
            </Router>
        </>
    );
}

export default App;
