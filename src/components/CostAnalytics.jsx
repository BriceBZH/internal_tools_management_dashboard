import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CostAnalytics() {
    const [tools, setTools] = useState([]);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch("https://tt-jsonserver-01.alt-tools.tech/tools")
        .then((response) => response.json())
        .then((data) => {
            setTools(data);
            console.log(data);
        })
        .catch((err) => {
            console.error("Erreur fetching Tools:", err);   
        });
    }, []);

    useEffect(() => {
        if (tools.length > 0) {
            const departments = [...new Set(tools.map(t => t.owner_department))];
            const totals = departments.map(dept => {
                let total = 0;
                tools.forEach(depart => {
                    if (depart.owner_department === dept) {
                        total += depart.monthly_cost;
                    }
                });
                return total;
            });
            const data = {
                labels: departments,
                datasets: [
                    {
                        data: totals,
                        backgroundColor: ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6", "#8b5cf6"],
                        hoverOffset: 6
                    }
                ]
            };
            setChartData(data);
        }
    }, [tools]);

    return (
        <div className="p-4 border border-[#191919] rounded-xl bg-black">
            <h4 className="text-gray-400 mb-2">Department Cost Breakdown</h4>
            {chartData ? (
                <Pie data={chartData} />
            ) : (
                <div className="text-gray-500">Loading chart...</div>
            )}
        </div>
    );
}

export default CostAnalytics;