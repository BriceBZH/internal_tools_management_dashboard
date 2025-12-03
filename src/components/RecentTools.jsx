import { useEffect, useState } from "react";

function RecentTools() {
    const [recentTools, setRecentTools] = useState([]);
    useEffect(() => {
        fetch("https://tt-jsonserver-01.alt-tools.tech/tools?_sort=updated_at&_order=desc&_limit=8")
        .then((response) => response.json())
        .then((data) => {
            setRecentTools(data);
            console.log(data); 
        })
        .catch((err) => {
            console.error("Erreur fetching Recent tools:", err);   
        });
    }, []);
    const colors = {
        active: "bg-green-400",
        unused: "bg-red-500",
        expiring: "bg-orange-300"
    };
    return (
        <div className="border border-solid border-[#191919] p-6 rounded-xl">
            <h3>Recent Tools</h3>
            <table className="w-full border-collapse  text-center"> 
                <thead>
                    <tr className="border-b border-[#191919]">
                        <th className="p-3">Tool</th>
                        <th className="p-3">Department</th>
                        <th className="p-3">Users</th>
                        <th className="p-3">Monthly Cost</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTools.map((tool, index) => 
                        <tr key={index} className="border-b border-[#191919]">
                            <td className="p-3">{tool.name}</td>
                            <td className="p-3">{tool.owner_department}</td>
                            <td className="p-3">{tool.active_users_count}</td>
                            <td className="p-3">{tool.monthly_cost}</td>
                            <td className="p-3">
                                <span className={`py-1 px-1 text-xs rounded-md ${colors[tool.status]}`}>
                                    {tool.status}
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default RecentTools;