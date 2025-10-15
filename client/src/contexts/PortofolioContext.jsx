import React,{ createContext,useState,useContext, Children, use } from "react";

const 
PortofolioContext = createContext();

export const usePortofolio = () => useContext(PortofolioContext);

export const PortofolioProvider = ({ Children }) =>{
    const [strategy, setStrategy] = useState("");
    const [amount, setAmount] = useState("");
    const [allocations,setAllocations] = useState({
        bonds:0,
        stocks:0,
        cash:0,
    });
    const [results,setResults] = useState(null);

    const value = {
        strategy,
        setStrategy,
        amount,
        setAmount,
        allocations,
        setAllocations,
        results,
        setResults,
    };

    return (
        <PortofolioContext.Provider value={value}>
            {Children}
        </PortofolioContext.Provider>
    )
}
