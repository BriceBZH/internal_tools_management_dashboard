import ToolsFilters from '../components/ToolsFilters'
import { useEffect, useState } from "react";
import { format } from "date-fns";

function ToolsTable({tools, filterChange, search}) {
    const colors = {
        active: "bg-green-400",
        unused: "bg-red-500",
        expiring: "bg-orange-300"
    };
    const [filters, setFilters] = useState({
        status: "",
        category: "",
        department: "",
        cost: ""
    });
    function filterChange(field, value) {
        setFilters(prev => ({ ...prev, [field]: value }));
    }
    const filteredTools = tools.filter(tool =>
        (!filters.category || tool.category === filters.category) &&
        (!filters.status || tool.status === filters.status) &&
        (!filters.department || tool.owner_department === filters.department) &&
        (!filters.cost || tool.monthly_cost <= filters.cost) && 
        (!search || tool.owner_department === search || tool.name === search || tool.description === search || tool.vendor === search || tool.category === search)
    )
    return (
        <div className="border border-solid border-[#191919] p-6 rounded-xl">
            <h3>Tools</h3>
            <div className="p-3">
                <ToolsFilters filterChange={filterChange} filters={filters} />
            </div>
            <table className="w-full border-collapse text-center"> 
                <thead>
                    <tr className="border-b border-[#191919]">
                        <th className="p-3">Tool</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">Vendor</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Monthly Cost</th>
                        <th className="p-3">Department</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Updated</th>
                        <th className="p-3">Actions</th> 
                    </tr>
                </thead>
                <tbody>
                    {filteredTools.length === 0 ? (
                        <tr className="border-b border-[#191919] hover:bg-neutral-400">
                            <td colSpan="9">No results</td>
                        </tr>
                    ) : (filteredTools
                    .map((tool, index) => 
                        <tr key={index} className="border-b border-[#191919] hover:bg-neutral-400">
                            <td className="p-3">
                                <img src={tool.icon_url} alt={tool.name + " icon"} style={{ width: 20, height: 20 }} />
                                {tool.name}
                            </td>
                            <td className="p-3">{tool.description}</td>
                            <td className="p-3">{tool.vendor}</td>
                            <td className="p-3">{tool.category}</td>
                            <td className="p-3">{tool.monthly_cost}</td>
                            <td className="p-3">{tool.owner_department}</td>
                            <td className="p-3"> 
                                <span className={`py-1 px-1 text-xs rounded-md ${colors[tool.status]}`}>
                                    {tool.status}
                                </span>
                            </td>
                            <td className="p-3">
                                { tool.updated_at? format(new Date(tool.updated_at), "dd/MM/yyyy HH:mm") : "—" } 
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
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToolsTable