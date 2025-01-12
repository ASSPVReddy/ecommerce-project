"use client";
import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

const ItemsContext = createContext("");

export default function ItemsProvider({ children }) {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/servicefile/allInOne.json");
                if(response.data.categories){
                    setProduct(response.data.categories);
                    console.log(product);
                    
                }
            } catch (error) {
                console.error("Error fetching data:", error.response ? error.response.data : error.message);
                setError(error);
            }
        };
        fetchData();
    }, []);
    return (
        <ItemsContext.Provider value={{ product, error }}>
            {children}
        </ItemsContext.Provider>
    );
}

export const useItemContext = () => useContext(ItemsContext);
