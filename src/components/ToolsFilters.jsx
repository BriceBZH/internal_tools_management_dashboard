import { useEffect, useState } from "react";

function ToolsFilters() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch("https://tt-jsonserver-01.alt-tools.tech/departments")
        .then((response) => response.json())
        .then((data) => {
            setDepartments(data);
            console.log(data); 
        })
        .catch((err) => {
            console.error("Erreur fetching Departments:", err);   
        });
    }, []);
    return (
        <div>
            {/* Department */}
            <label for="department">Department</label>
            <select id="department" value="" className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg">
                <option value ="">All department</option>
                {departments.map((department, index) => 
                    <option key={index} value ={department.name}>{department.name}</option>
                )}
            </select>
            {/* Status */}
            <label for="status">Status</label>
            <select id="status" value="" className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg">
                <option value ="">All status</option>
                <option value ="active">active</option>
                <option value ="unused">unused</option>
                <option value ="expiring">expiring</option>
            </select>
            {/* Category */}
            <label for="category">Category</label>
            <select id="category" value="" className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg">
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
        </div>
    )
}

export default ToolsFilters