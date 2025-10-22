import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
const API = import.meta.env.VITE_BACKEND_URL;


const PortofolioContext = createContext();

export const usePortofolio = () => useContext(PortofolioContext);

export const PortofolioProvider = ({ children }) => {
    const [strategy, setStrategy] = useState("");
    const [amount, setAmount] = useState("");
    const [allocations, setAllocations] = useState({
        bonds: 0,
        stocks: 0,
        cash: 0,
    });
    const [results, setResults] = useState(null);

    const [portfolioHistory, setPortfolioHistory] = useState([]);
    const [loadingHistory, setLoadingHistory] = useState(false);

    const { currentUser } = useAuth(); // Get currentUser from AuthContext

    // new function for fetching data of portfolios
    const fetchPortofolioHistory = async () => {
        setLoadingHistory(true);
        try {
            if (!currentUser) {
                console.log("Not logged in");
                setPortfolioHistory([]);
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            };

            const { data } = await axios.get(
            `${API}/api/portfolios`,
            config
        );
            setPortfolioHistory(data);
        }
        catch (error) {
            console.error("Failed to fetch history:", error);
            setPortfolioHistory([]);
        } finally {
            setLoadingHistory(false);
        }
    };

    const savePortfolio = async (portfolioData) => {
        try {
            if (!currentUser) {
                alert('You must be logged in to save a portfolio.');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            };

            await axios.post(
            `${API}/api/portfolios`,
            portfolioData,
            config
        );

            fetchPortofolioHistory();
        }
        catch (error) {
            console.error('Failed to save portfolio', error);
            alert('Could not save portfolio. Are you logged in?');
        }
    };

    useEffect(() => {
        if (currentUser) {
            fetchPortofolioHistory();
        } else {
            setPortfolioHistory([]);
        }
    }, [currentUser]);

    const value = {
        strategy,
        setStrategy,
        amount,
        setAmount,
        allocations,
        setAllocations,
        results,
        setResults,
        portfolioHistory,
        loadingHistory,
        fetchPortofolioHistory,
        savePortfolio,
    };

    return (
        <PortofolioContext.Provider value={value}>
            {children}
        </PortofolioContext.Provider>
    );
};