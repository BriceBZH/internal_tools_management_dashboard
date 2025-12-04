import ToolsFilters from '../components/ToolsFilters'
import Modals from '../components/Modals'
import { useEffect, useState } from "react";
import { format } from "date-fns";

function ToolsTable({tools, filterChange, search, setTools}) {
    const [modal, setModal] = useState(false);
    const [modalAction, setModalAction] = useState();
    const [modalContent, setModalContent] = useState([]);
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
        (!search || tool.owner_department.toLowerCase().includes(search.toLowerCase()) || tool.name.toLowerCase().includes(search.toLowerCase()) || tool.description.toLowerCase().includes(search.toLowerCase()) || tool.vendor.toLowerCase().includes(search.toLowerCase()) || tool.category.toLowerCase().includes(search.toLowerCase()))
    )
    function handleModal(etat) {
        setModal(etat);
    }
    function handleAction(id, actionType) {
        if (actionType === "Delete") {
            fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${id}`, {
                method: "DELETE",
            })
            .then(() => {
                setTools(prevTools => prevTools.filter(tool => tool.id !== id));
            })
            .catch(err => console.error(err));
        } else if (actionType === "View") {
            fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${id}`)
            .then((response) => response.json()) 
            .then((data) => {
                setModalContent(data);
                handleModal(true);
                setModalAction(actionType);
            })
            .catch(err => console.error(err));
        } else if (actionType === "Edit") {
            fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${id}`)
            .then((response) => response.json()) 
            .then((data) => {
                setModalContent(data);
                handleModal(true);
                setModalAction(actionType);
            })
            .catch(err => console.error(err));
        } else {
            console.log(actionType, id);
        }
    }
    function handleContentModal(e) {
        e.preventDefault();
        setModal(false);
        const idTool = e.target.id.value;
        const tool = {
            id: e.target.id.value,
            name: e.target.name.value,
            description: e.target.description.value,
            vendor: e.target.vendor.value,
            category: e.target.category.value,
            monthly_cost: e.target.monthly_cost.value,
            previous_month_cost: e.target.previous_month_cost.value,
            owner_department: e.target.owner_department.value,
            status: e.target.status.value,
            website_url: e.target.website_url.value,
            active_users_count: e.target.active_users_count.value,
            icon_url: e.target.icon_url.value, 
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        if (modalAction === "Edit") {
            fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${idTool}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tool)
            })
            .then(res => res.json())
            .then(updatedTool => {
                setTools(prevTools => prevTools.map(t => t.id === updatedTool.id ? updatedTool : t));
            })
            .catch(err => console.error(err));
        } else if (modalAction === "Add") {
            fetch('https://tt-jsonserver-01.alt-tools.tech/tools/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tool)
            })
            .then(res => res.json())
            .then(() => {
                setTools(prevTools => [...prevTools, tool]);
            })
            .catch(err => console.error(err));
        }
        
    }
    return (
        <div className="border border-solid border-[#191919] p-6 rounded-xl overflow-x-auto">
            <h2 className="text-lg font-medium">Tools</h2>
            <div className="p-3">
                <Modals modal={modal} modalContent={modalContent} onModalChange={handleModal} modalAction={modalAction} handleContentModal={handleContentModal} setModalAction={setModalAction}/> 
            </div>
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
                    {
                        filteredTools.length === 0 ? (
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
                                    <select className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg" onChange={(e) => handleAction(tool.id, e.target.value)}>
                                        <option value="">Action</option>
                                        <option value="View">View</option>
                                        <option value="Edit">Edit</option>
                                        <option value="Delete">Delete</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToolsTable