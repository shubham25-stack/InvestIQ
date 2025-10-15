import React, { useState, useEffect } from "react";
import { usePortofolio } from "../../contexts/PortofolioContext";
import { validateField, validateTotal } from "../../utils/validation";

const STRATEGIES = {
    conservative: {
        bonds:{min:60,max:80},
        stocks:{min:20,max:40},
        cash:{min:5, max:10}
    },
    moderate: {
        bonds:{min:40,max:50},
        stocks:{min:40,max:50},
        cash:{min:5,max:15}
    },
    aggressive: {
        bonds:{min:20,max:30},
        stocks:{min:60,max:70},
        cash:{min:5,max:10}
    }
}

const AllocationForm = () => {
    const { strategy, amount, setAmount, allocations, setAllocations, setResults } = usePortofolio();
    const [errors, setError] = useState({});

    const totalAllocation = Object.values(allocations).reduce((sum, val) => sum + Number(val || 0), 0);

    //handle the allocation change
    const handleAllocationChange = (event) => {
        const { name, value } = event.target;
        setAllocations(prev => ({ ...prev, [name]: value }));

        //realtime filed validations
        const fieldError = validateField(name, value, STRATEGIES[strategy]);
        setError(prev => ({ ...prev, [name]: fieldError }));
    };

    //handle amount change here...
    const handleCalculate = () => {
        if (totalAllocation === 100 && amount > 0) {
            const calculatedResults = {
                bonds: (amount * allocations.bonds) / 100,
                stocks: (amount * allocations.stocks) / 100,
                cash: (amount * allocations.cash) / 100,
            };
            setResults(calculatedResults);
        } else {
            alert("Please ensure total allocation is 100% and investment amount is entered.");
        }
    };

    return (
        <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Portofolio Allocation</h2>
            {/* //investment ampont input */}
            <div className="mb-4">
                <label>Investment Amount</label>
                <input
                    type="number"
                    placeholder="$ Enter Amount"
                    value={amount}
                    onChange={(event) =>
                        setAmount(event.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mt-1"

                />
            </div>
            {/* //allocation inputs bonds,stocks,cash*/}
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

            {/* //total allocation display */}
            <div className="p-2 text-center bg-gray-100 rounded-md">
                <button onClick={handleCalculate} className="w-full p-2 text-white bg-gray-800 rounded-md">
                    Calculate</button>
                <button type="reset" className="w-full p-2 border border-gray-300 rounded-md">Reset</button>
            </div>

        </div>
    )


};

export default AllocationForm;