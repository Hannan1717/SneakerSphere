// SneakerContext.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// SneakerContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SneakerContext = createContext();

export function useSneakerContext() {
    const context = useContext(SneakerContext);
    if (!context) {
        throw new Error(
            "useSneakerContext must be used within a SneakerProvider"
        );
    }
    return context;
}

export function SneakerProvider({ children }) {
    const [sneakersNike, setSneakersNike] = useState([]);
    const [sneakersNb, setSneakersNb] = useState([]);
    const [selected, setSelected] = useState(localStorage.getItem("selected"));
    const [isLoggedIn, setLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );
    const location = useLocation();

    const fetchData = async () => {
        try {
            const dataNike = await axios.get("http://localhost:3001/nike");
            const dataNb = await axios.get("http://localhost:3001/newBalance");
            setSneakersNike(dataNike.data);
            setSneakersNb(dataNb.data);
            console.log("Data fetched successfully");
        } catch (error) {
            console.error("Error fetching data:", error);
            window.alert("Error fetching data");
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchData();
        }
        if (window.location.pathname === "/nike") {
            setSelected(true);
            localStorage.setItem("selected", "true");
        } else if (window.location.pathname === "/newBalance") {
            setSelected(false);
            localStorage.setItem("selected", "false");
        }
    }, [isLoggedIn, window.location.pathname]);

    const handleLogin = async (username, password) => {
        try {
            const response = await fetch("http://localhost:3001/login");
            if (response.ok) {
                const userDataArray = await response.json();
                if (userDataArray.length > 0) {
                    const dataUser = userDataArray[0];
                    if (
                        dataUser.username === username &&
                        dataUser.password === password
                    ) {
                        setLoggedIn(true);
                        localStorage.setItem("isLoggedIn", "true");
                        console.log("Success login");
                    } else {
                        console.error("Gagal login");
                    }
                } else {
                    console.error("Data user tidak ditemukan");
                }
            } else {
                console.error("Gagal login");
            }
        } catch (error) {
            console.error("Terjadi kesalahan", error);
        }
    };

    return (
        <SneakerContext.Provider
            value={{
                sneakers: selected ? sneakersNike : sneakersNb,
                isLoggedIn,
                setLoggedIn,
                handleLogin,
            }}
        >
            {children}
        </SneakerContext.Provider>
    );
}
