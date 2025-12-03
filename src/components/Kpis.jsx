import { useEffect, useState } from "react";

function Kpis() {
    const [kpis, setKpis] = useState([]);
        useEffect(() => {
            fetch("https://tt-jsonserver-01.alt-tools.tech/analytics")
            .then((response) => response.json())
            .then((data) => {
                setKpis(data);
                // console.log(data); 
            })
            .catch((err) => {
                console.error("Erreur fetching Recent tools:", err);   
            });
        }, []);
    return (
        <ul className="flex flex-row gap-3 mb-6 mt-6 w-full">
            <li className="flex-1  border rounded-xl border-solid border-[#191919] p-3 min-h-30">
                <h4>Monthly Budget</h4>
                {/* <p>{kpis.budget_overview.current_month_total}/{kpis.budget_overview.monthly_limit}</p> */}
                {/* <p>{kpis.kpi_trends.budget_change}</p> */}
            </li>
            <li className="flex-1 border rounded-xl border-solid border-[#191919] p-3 min-h-30">
                <h4>Active Tools</h4>
                <p>plop</p>
                {/* <p>{kpis.kpi_trends.tools_change}</p> */}
            </li>
            <li className="flex-1 border rounded-xl border-solid border-[#191919] p-3 min-h-30">
                <h4>Departments</h4>
                {/* <p>{kpis.}</p> */}
                {/* <p>{kpis.kpi_trends.departments_change}</p> */}
            </li>
            <li className="flex-1 border rounded-xl border-solid border-[#191919] p-3 min-h-30">
                <h4>Cost/User</h4>
                {/* <p>{kpis.cost_analytics.cost_per_user}</p>
                <p>{kpis.kpi_trends.cost_per_user_change}</p> */}
            </li>
        </ul>
    )
}

export default Kpis