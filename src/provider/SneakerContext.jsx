// SneakerContext.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
    const [selectedBrand, setSelectedBrand] = useState("nike");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const location = useLocation();
    useEffect(() => {
        async function fetchData() {
            try {
                const dataNike = await axios.get("http://localhost:3001/nike");
                const dataNb = await axios.get(
                    "http://localhost:3001/newBalance"
                );
                setSneakersNike(dataNike.data);
                setSneakersNb(dataNb.data);
                console.log("Data fetched successfully");
            } catch (error) {
                console.error("Error fetching data:", error);
                window.alert("Error fetching data");
            }
        }

        fetchData();

        // Perbarui selectedBrand berdasarkan path yang diakses
        if (location.pathname === "/nike") {
            setSelectedBrand("nike");
        } else if (location.pathname === "/newBalance") {
            setSelectedBrand("newBalance");
        }
        console.log(selectedBrand);
        console.log("useEffect executed");
    }, [location.pathname]);

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
                sneakers: selectedBrand === "nike" ? sneakersNike : sneakersNb,
                selectedBrand,
                isLoggedIn,
                setLoggedIn,
                handleLogin,
            }}
        >
            {children}
        </SneakerContext.Provider>
    );
}
