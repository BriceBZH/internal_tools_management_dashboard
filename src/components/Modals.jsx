import Modal from 'react-modal';
import { useEffect, useState } from "react";

function Modals({ onModalChange, modal, modalContent, modalAction}) {
    console.log(modalContent)
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
            <button className="border border-[#191919] border-solid p-1 rounded-lg" onClick={() => onModalChange(true)}>Add Tool</button>
            <Modal isOpen={modal} style={{
                content: { backgroundColor: "black", color: "white", maxWidth: "50%", margin: "auto", padding: "20px", borderRadius: '12px' },
                overlay: { backgroundColor: "rgba(0,0,0,0.5)" }
            }}>
                <button onClick={() => onModalChange(false)}>Close</button>
                <h3 className="text-sm font-medium text-center">{modalAction} Tools</h3>
                <form className="flex flex-col gap-4">   
                    <div className="flex flex-col">
                        <label htmlFor="id">ID</label>
                        <input type="text" id="id" value={modalContent.id} className="border border-[#191919] border-solid p-1 rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={modalContent.name} className="border border-[#191919] border-solid p-1 rounded-lg"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" value={modalContent.description} className="border border-[#191919] border-solid p-1 rounded-lg"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="vendor">Vendor</label>
                        <input type="text" id="vendor" value={modalContent.vendor} className="border border-[#191919] border-solid p-1 rounded-lg"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category">Category</label>
                        <select id="category" value={modalContent.category} className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg">
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
                    <div className="flex flex-row justify-around gap-3">
                        <div className="flex flex-col w-full">
                            <label htmlFor="monthly_cost">Monthly Cost</label>
                            <input type="text" id="monthly_cost" value={modalContent.monthly_cost} className="border border-[#191919] border-solid p-1 rounded-lg"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="previous_month_cost">Previous Month Cost</label>
                            <input type="text" id="previous_month_cost" value={modalContent.previous_month_cost} className="border border-[#191919] border-solid p-1 rounded-lg"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="department">Department</label>
                         <select id="department" value={modalContent.owner_department} className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg" onChange={(e) => filterChange("department", e.target.value)}>
                            {departments.map((department, index) => 
                                <option key={index} value ={department.name}>{department.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="status">Status</label>
                        <select id="status" value={modalContent.status} className="bg-black text-white border border-[#191919] border-solid p-1 rounded-lg">
                            <option value ="active">active</option>
                            <option value ="unused">unused</option>
                            <option value ="expiring">expiring</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="website_url">Website URL</label>
                        <input type="text" id="website_url" value={modalContent.website_url} className="border border-[#191919] border-solid p-1 rounded-lg"/>
                    </div>
                    <div className="flex flex-row justify-around gap-3">
                        <div className="flex flex-col w-full">
                            <label htmlFor="active_users_count">Active Users Count</label>
                            <input type="text" id="active_users_count" value={modalContent.active_users_count} className="border border-[#191919] border-solid p-1 rounded-lg"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="icon_url">Icon URL</label>
                            <input type="text" id="icon_url" value={modalContent.icon_url}  className="border border-[#191919] border-solid p-1 rounded-lg"/>
                        </div>
                    </div>
                    {
                        modalAction !== "view" && (
                            <div className="flex flex-col">
                                <button type="submit" className="border border-[#191919] border-solid p-1 rounded-lg">Valid</button>
                            </div>
                        )
                    }
                </form>
            </Modal>
        </div>
    )
}

export default Modals