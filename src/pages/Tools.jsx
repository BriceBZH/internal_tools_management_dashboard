import ToolsTable from '../components/ToolsTable'
import ToolsFilters from '../components/ToolsFilters'
import { useEffect, useState } from "react";

function Tools() {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://tt-jsonserver-01.alt-tools.tech/tools")
        .then((response) => response.json())
        .then((data) => {
            setTools(data);
        })
        .catch((err) => {
            console.error("Erreur fetching tools:", err);   
        });
    }, []);
    return (
        <div className="p-6">
            <h1 className="font-inter">Internal Tools Dashboard</h1>
            <p>Monitor and manage your organization's software tools and expenses</p>
            <ToolsFilters  />
            <ToolsTable tools={tools} />
        </div>
    )
}

export default Tools