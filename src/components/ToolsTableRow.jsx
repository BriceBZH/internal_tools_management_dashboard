import { format } from "date-fns";

function ToolsTableRow({tool, colors, handleAction}) {
    return (
        <>
            <tr className="border-b border-[#191919] hover:bg-neutral-400">
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
                    <select className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg" onChange={(e) => handleAction(tool.id, e.target.value)}>
                        <option value="">Action</option>
                        <option value="View">View</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                    </select>
                </td>
            </tr>
        </>
    )
}

export default ToolsTableRow