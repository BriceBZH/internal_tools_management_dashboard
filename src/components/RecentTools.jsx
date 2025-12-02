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
    return (
        <div className="border border-solid border-white">
            <h3 >Recent Tools</h3>
            <table className="border-collapse"> 
                <thead>
                    <tr>
                        <th>Tool</th>
                        <th>Department</th>
                        <th>Users</th>
                        <th>Monthly Cost</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTools.map((tool, index) => 
                        <tr key={index}>
                            <td className="font-inter">{tool.name}</td>
                            <td>{tool.owner_department}</td>
                            <td>{tool.active_users_count}</td>
                            <td>{tool.monthly_cost}</td>
                            <td>{tool.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default RecentTools;