import React from "react";
import { usePortofolio } from "../../contexts/PortofolioContext.jsx";

const PortfolioHistory = () => {
    const { portfolioHistory, loadingHistory } = usePortofolio();

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Saved Portfolios</h2>
            {loadingHistory ? (
                <p>Loading history...</p>
            ) : portfolioHistory.length === 0 ? (
                <p className="text-gray-500">You have no saved portfolios.</p>
            ) : (
                <div className="space-y-4 max-h-64 overflow-y-auto">
                    {portfolioHistory.map((p) => (
                        <div key={p._id} className="p-4 border rounded-md bg-gray-50">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold capitalize text-indigo-600">
                                    {p.strategy} - ${p.totalAmount.toLocaleString()}
                                </span>
                                <span className="text-sm text-black-900">
                                    {new Date(p.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex justify-around text-sm text-gray-700">
                                <span className="text-cyan-600">Bonds: {p.distribution.bonds}%</span>
                                <span className="text-blue-900">Stocks: {p.distribution.stocks}%</span>
                                <span className="text-indigo-700">Cash: {p.distribution.cash}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PortfolioHistory;