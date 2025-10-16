import React from "react";
import { usePortofolio } from "../../contexts/PortofolioContext";

const ResultsDisplay = () =>{
    const { results,allocations } = usePortofolio();

    if(!results){
        return null;
    }
    return (
        <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Allocation Results</h2>
            <div className="space-y-4">
                <div className="p-4 bg-indigo-100 rounded-md">
                    <p className="text-indigo-600">Bonds</p>
                    <p className="text-2xl font-bold text-indigo-900">${results.bonds.toLocaleString()}</p>
                    <p className="text-sm text-indigo-700">{allocations.bond}% of portofolio</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-md">
                    <p className="text-blue-600">Stocks</p>
                    <p className="text-2xl font-bold text-blue-900">${results.stocks.toLocaleString()}</p>
                    <p className="text-sm text-blue-500">{allocations.stocks}% of portofolio</p>

                </div>
                <div className="p-4 bg-cyan-100 rounded-md">
                    <p className="text-cyan-600">Cash</p>
                    <p className="text-2xl font-bold text-cyan-900">${results.cash.toLocaleString()}</p>
                    <p className="text-sm text-cyan-700">{allocations.cash}% of portofolio</p>

                </div>
            </div>
        </div>
    );
};

export default ResultsDisplay;