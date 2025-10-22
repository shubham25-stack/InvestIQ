import React from "react";
import { usePortofolio } from "../../contexts/PortofolioContext.jsx";
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

//defining strategy selector from here auto filled according to the selected strategy
const StrategySelector = () => {
    const { strategy, setStrategy, setAllocations } = usePortofolio();
    const handleStrategyChange = event => {
        const selectedStrategy = event.target.value;
        setStrategy(selectedStrategy);
        switch (selectedStrategy) {
            case "conservative":
                setAllocations({ bonds: 70, stocks: 25, cash: 5 });
                break;
            case "moderate":
                setAllocations({
                    bonds: 45, stocks: 45, cash: 10
                });
                break;
            case "aggressive":
                setAllocations({ bonds: 25, stocks: 65, cash: 10 });
                break;
            default:
                setAllocations({ bonds: 0, stocks: 0, cash: 0 });
        }
    };
    return (<div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Select Investment Strategy</h2>
        <select
            value={strategy}
            onChange={handleStrategyChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
        >
            <option value="">Select a strategy</option>
            <option value="conservative">Conservative</option>
            <option value="moderate">Moderate</option>
            <option value="aggressive">Aggressive</option>
        </select>
        <div className="p-2 center bg-sky-100 rounded-md border border-sky-300 mt-5">
            <h5 className="pl-2 text-indigo-500">Strategy details</h5>
            <p className="pl-2 text-blue-500">select a strategy to see recommended allocations</p>
        </div>
    </div>
    )
};
export default StrategySelector;