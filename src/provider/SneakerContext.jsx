// SneakerContext.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const SneakerContext = createContext();

// export function useSneakerContext() {
//     const context = useContext(SneakerContext);
//     if (!context) {
//         throw new Error(
//             "useSneakerContext must be used within a SneakerProvider"
//         );
//     }
//     return context;
// }

// export function SneakerProvider({ children }) {
//     const [sneakersNike, setSneakersNike] = useState([]);
//     const [sneakersNb, setSneakersNb] = useState([]);
//     const [selectedBrand, setSelectedBrand] = useState("nike");
//     const [isLoggedIn, setLoggedIn] = useState(false);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const dataNike = await axios.get("http://localhost:3001/nike");
//                 const dataNb = await axios.get(
//                     "http://localhost:3001/newBalance"
//                 );
//                 setSneakersNike(dataNike.data);
//                 setSneakersNb(dataNb.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 window.alert("Error fetching data");
//             }
//         }

//         fetchData();

//         // Perbarui selectedBrand berdasarkan path yang diakses
//         if (window.location.pathname === "/") {
//             setSelectedBrand("nike");
//         } else if (window.location.pathname === "/newbalance") {
//             setSelectedBrand("newBalance");
//         }
//     }, []);

//     return (
//         <SneakerContext.Provider
//             value={{
//                 sneakers: selectedBrand === "nike" ? sneakersNike : sneakersNb,
//                 selectedBrand,
//                 isLoggedIn, // Tambahkan state status login ke konteks
//                 setLoggedIn, // Tambahkan fungsi untuk mengubah status login ke konteks
//             }}
//         >
//             {children}
//         </SneakerContext.Provider>
//     );
// }
