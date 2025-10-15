import React from "react";
import { usePortofolio } from "../../contexts/PortofolioContext.jsx";

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
};

const StrategySelector = () => {
    const [strategy,setStrategy] = usePortofolio();
    const handleStrategyChange = (event)=>{
        setStrategy(event.target.value);
    };
    const currentStrategy = STRATEGIES[strategy];
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Investment Strategy</h2>
            <select value={strategy} onChange={handleStrategyChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Strategy</option>
                <option value="conservative">Conservative</option>
                <option value="moderate">Moderate</option>
                <option value="aggressive">Aggressive</option>
            </select>
            {currentStrategy && ( <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold">Strategy Details</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Bonds: {currentStrategy.bonds.min}% - {currentStrategy.bonds.max}%</li>
                    <li>Stocks: {currentStrategy.stocks.min}% - {currentStrategy.stocks.max}%</li>
                    <li>Cash: {currentStrategy.cash.min}% - {currentStrategy.cash.max}%</li>
                </ul>
            </div> )}
        </div>
    );
};

export default StrategySelector;