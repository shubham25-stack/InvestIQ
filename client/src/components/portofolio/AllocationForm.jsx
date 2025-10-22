import React, { useState, useEffect } from "react";
import { usePortofolio } from "../../contexts/PortofolioContext.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { validateField } from "../../utils/validation.js";

const STRATEGIES = {
    conservative: {
        bonds: { min: 60, max: 80 },
        stocks: { min: 20, max: 40 },
        cash: { min: 5, max: 10 }
    },
    moderate: {
        bonds: { min: 40, max: 50 },
        stocks: { min: 40, max: 50 },
        cash: { min: 5, max: 15 }
    },
    aggressive: {
        bonds: { min: 20, max: 30 },
        stocks: { min: 60, max: 70 },
        cash: { min: 5, max: 10 }
    }
};

const AllocationForm = () => {
    const {
        strategy,
        setStrategy,
        amount,
        setAmount,
        allocations,
        setAllocations,
        setResults,
        savePortfolio
    } = usePortofolio();

    const { currentUser } = useAuth(); // Get currentUser from AuthContext
    const [errors, setError] = useState({});
    const totalAllocation = Object.values(allocations).reduce((sum, val) => sum + Number(val || 0), 0);

    const handleAllocationChange = (event) => {
        const { name, value } = event.target;
        const numericValue = value === '' ? '' : Number(value);
        setAllocations(prev => ({ ...prev, [name]: numericValue }));

        const fieldError = validateField(name, numericValue, STRATEGIES[strategy]);
        setError(prev => ({ ...prev, [name]: fieldError }));
    };

    const handleCalculate = () => {
        const hasErrors = Object.values(errors).some(error => error !== null && error !== undefined);

        if (totalAllocation === 100 && amount > 0 && !hasErrors) {
            const calculatedResults = {
                bonds: (amount * (allocations.bonds || 0)) / 100,
                stocks: (amount * (allocations.stocks || 0)) / 100,
                cash: (amount * (allocations.cash || 0)) / 100,
            };
            setResults(calculatedResults);

            if (currentUser) {
                const portfolioToSave = {
                    strategy,
                    totalAmount: Number(amount),
                    distribution: {
                        bonds: Number(allocations.bonds),
                        stocks: Number(allocations.stocks),
                        cash: Number(allocations.cash),
                    },
                };
                savePortfolio(portfolioToSave);
            }
        } else {
            alert("Please ensure total allocation is 100%, investment amount is valid, and there are no errors.");
        }
    };

    const handleReset = () => {
        setAllocations({ bonds: 0, stocks: 0, cash: 0 });
        setAmount("");
        setError({});
        setResults(null);
        setStrategy('');
    };

    return (
        <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Portfolio Allocation</h2>

            <div className="mb-4">
                <label>Investment Amount</label>
                <input
                    type="number"
                    placeholder="$ Enter Amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mt-1"
                />
            </div>

            {Object.keys(allocations).map(key => (
                <div key={key} className="mb-4">
                    <label className="capitalize">{key}(%)</label>
                    <input
                        type="number"
                        name={key}
                        value={allocations[key]}
                        onChange={handleAllocationChange}
                        className={`w-full p-2 border ${errors[key] ? "border-red-500" : "border-gray-300"} rounded-md mt-1`}
                        disabled={!strategy}
                    />
                    {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
                </div>
            ))}

            <div className={`p-2 text-center rounded-md border ${totalAllocation !== 100 ? 'bg-red-100 border-red-300' : 'bg-sky-100 border-sky-300'}`}>
                Total Allocation: {totalAllocation}% (must equal 100%)
            </div>

            <div className="p-2 text-center rounded-md flex space-x-4 mt-4">
                <button
                    onClick={handleCalculate}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                >
                    {currentUser ? 'Calculate & Save' : 'Calculate'}
                </button>
                <button
                    type="reset"
                    onClick={handleReset}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    Reset
                </button>
            </div>
        </div>
    )
};

export default AllocationForm;