function ToolsTable({tools}) {
    return (
        <div className="border border-solid border-[#191919] p-6 rounded-xl">
            <h3>Tools</h3>
            <table className="w-full border-collapse  text-center"> 
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
                    {tools.map((tool, index) => 
                        <tr key={index} className="border-b border-[#191919]">
                            <td className="p-3">{tool.name}</td>
                            <td className="p-3">{tool.description}</td>
                            <td className="p-3">{tool.vendor}</td>
                            <td className="p-3">{tool.category}</td>
                            <td className="p-3">{tool.monthly_cost}</td>
                            <td className="p-3">{tool.owner_department}</td>
                            <td className="p-3">{tool.status}</td>
                            <td className="p-3">{tool.updated_at}</td>
                            <td className="p-3">
                                
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ToolsTable