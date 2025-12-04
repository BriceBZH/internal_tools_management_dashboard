import { useEffect, useState } from "react";

function ToolsFilters({handleFilterChange, filters}) {
    const [departments, setDepartments] = useState([]);
    {/* Récupération des différents départements */}
    useEffect(() => {
        fetch("https://tt-jsonserver-01.alt-tools.tech/departments")
        .then((response) => response.json())
        .then((data) => {
            setDepartments(data);
        })
        .catch((err) => {
            console.error("Erreur fetching Departments:", err);   
        });
    }, []);
    return (
        <div className="flex gap-6">
            {/* Department */}
            <label htmlFor="department">Department</label>
            <select id="department" value={filters.department} className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg" onChange={(e) => handleFilterChange("department", e.target.value)}>
                <option value ="">All department</option>
                {departments.map((department, index) => 
                    <option key={index} value ={department.name}>{department.name}</option>
                )}
            </select>
            {/* Status */}
            <label htmlFor="status">Status</label>
            <select id="status" value={filters.status} className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg" onChange={(e) => handleFilterChange("status", e.target.value)}>
                <option value ="">All status</option>
                <option value ="active">active</option>
                <option value ="unused">unused</option>
                <option value ="expiring">expiring</option>
            </select>
            {/* Category */}
            <label htmlFor="category">Category</label>
            <select id="category" value={filters.category} className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg" onChange={(e) => handleFilterChange("category", e.target.value)}>
                <option value ="">All category</option>
                <option value ="Communication">Communication</option>
                <option value ="Design">Design</option>
                <option value ="Development">Development</option>
                <option value ="Productivity">Productivity</option>
                <option value ="Project Management">Project Management</option>
                <option value ="Sales & Marketing">Sales & Marketing</option>
                <option value ="HR">HR</option>
                <option value ="Security">Security</option>
                <option value ="Finance">Finance</option>
                <option value ="Eugene">Eugene</option>
                <option value ="communication">communication</option>
            </select>
            {/* Cost */}
            <label htmlFor="cost">Cost: {filters.cost}</label>
            <input type="range" id="cost" name="volume" min="0" max="3000" onChange={(e) => handleFilterChange("cost", e.target.value)}/>
        </div>
    )
}

export default ToolsFilters