import React from "react";
import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { usePortofolio } from "../../contexts/PortofolioContext.jsx";

const COLORS = ["#810ebfff", "#0e5e77ff", "#92773bff"];

const PieChart = () => {
    const { results } = usePortofolio();

    const data = results ? [
        { name: "Bonds", value: results.bonds },
        { name: "Stocks", value: results.stocks },
        { name: "Cash", value: results.cash },
    ] : [];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </RePieChart>
        </ResponsiveContainer>
    );
};

export default PieChart;