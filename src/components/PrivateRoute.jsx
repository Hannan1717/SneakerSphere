/* eslint-disable react/prop-types */
// PrivateRoute.jsx
import { Route } from "react-router-dom";
import { useSneakerContext } from "../provider/SneakerContext";
import Login from "../pages/Login";
const PrivateRoute = ({ elementreal }) => {
    const { isLoggedIn } = useSneakerContext();

    return <Route element={isLoggedIn ? elementreal : <Login />} />;
};

export default PrivateRoute;
