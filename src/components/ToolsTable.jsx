import ToolsFilters from '../components/ToolsFilters'
import Modals from '../components/Modals'
import ToolsTableRow from '../components/ToolsTableRow'
import { useEffect, useState } from "react";


function ToolsTable({tools, search, setTools, handleAction, modalAction, setModalAction, modalContent, handleModal, modal, setModal, handleContentModal}) {
    {/* Les couleurs en fonction du status */}
    const colors = {
        active: "bg-green-400",
        unused: "bg-red-500",
        expiring: "bg-orange-300"
    };
    {/* Initialisation des filtres */}
    const [filters, setFilters] = useState({
        status: "",
        category: "",
        department: "",
        cost: ""
    });
    {/* Récupération des filtres */}
    function handleFilterChange(field, value) {
        setFilters(prev => ({ ...prev, [field]: value }));
    }
    {/* Utilisation des différents filtres + la saisie de la searchBar */}
    const filteredTools = tools.filter(tool =>
        (!filters.category || tool.category === filters.category) &&
        (!filters.status || tool.status === filters.status) &&
        (!filters.department || tool.owner_department === filters.department) &&
        (!filters.cost || tool.monthly_cost <= filters.cost) && 
        (!search || tool.owner_department.toLowerCase().includes(search.toLowerCase()) || tool.name.toLowerCase().includes(search.toLowerCase()) || tool.description.toLowerCase().includes(search.toLowerCase()) || tool.vendor.toLowerCase().includes(search.toLowerCase()) || tool.category.toLowerCase().includes(search.toLowerCase()))
    )
    return (
        <div className="border border-solid border-[#191919] p-6 rounded-xl overflow-x-auto">
            <h2 className="text-lg font-medium">Tools</h2>
            <div className="p-3">
                <Modals modal={modal} modalContent={modalContent} onModalChange={handleModal} modalAction={modalAction} handleContentModal={handleContentModal} setModalAction={setModalAction}/> 
            </div>
            <div className="p-3">
                <ToolsFilters handleFilterChange={handleFilterChange} filters={filters} />    
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
                            <ToolsTableRow key={tool.id} tool={tool} colors={colors} handleAction={handleAction} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToolsTable