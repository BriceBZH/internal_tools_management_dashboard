import { useEffect, useState } from "react";

function RecentTools({search}) {
    const [recentTools, setRecentTools] = useState([]);
    const [sortColumn, setSortColumn] = useState('updated_at');
    const [sortOrder, setSortOrder] = useState('desc');
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
    console.log(search)
    return (
        <div className="border border-solid border-[#191919] p-6 rounded-xl">
            <h3>Recent Tools</h3>
            <table className="w-full border-collapse  text-center"> 
                <thead>
                    <tr className="border-b border-[#191919]">
                        <th className="p-3 cursor-pointer" onClick={() => { setSortColumn('name'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }}>Tool</th>
                        <th className="p-3 cursor-pointer" onClick={() => { setSortColumn('owner_department'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }}>Department</th>
                        <th className="p-3">Users</th>
                        <th className="p-3">Monthly Cost</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recentTools
                        .filter(tool => !search || tool.owner_department === search || tool.name === search)
                        .sort((a, b) => {
                            let valA = a[sortColumn];
                            let valB = b[sortColumn];

                            if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
                            if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
                            return 0;
                        })
                        .map((tool, index) => 
                            <tr key={index} className="border-b border-[#191919] hover:bg-neutral-400">
                                <td className="p-3">
                                    <img src={tool.icon_url} alt={tool.name + " icon"} style={{ width: 20, height: 20 }} />
                                    {tool.name}
                                </td>
                                <td className="p-3">{tool.owner_department}</td>
                                <td className="p-3">{tool.active_users_count}</td>
                                <td className="p-3">{tool.monthly_cost}</td>
                                <td className="p-3">
                                    <span className={`py-1 px-1 text-xs rounded-md ${colors[tool.status]}`}>
                                        {tool.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <select className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg" onChange={(e) => action(tool.id, e.target.value)}>
                                        <option value="">Action</option>
                                        <option value="view">View</option>
                                        <option value="edit">Edit</option>
                                        <option value="delete">Delete</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default RecentTools;