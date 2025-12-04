import ToolsTable from '../components/ToolsTable'
import { useEffect, useState } from "react";

function Tools({search, handleAction, modalAction, setModalAction, modalContent, handleModal, modal, setModal, handleContentModal}) {
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
            <h1 className="text-xl font-semibold">Internal Tools Dashboard</h1>
            <p>Monitor and manage your organization's software tools and expenses</p>
            <ToolsTable tools={tools} search={search} setTools={setTools} modal={modal} setModal={setModal} handleContentModal={handleContentModal} handleModal={handleModal} handleAction={handleAction} modalAction={modalAction} setModalAction={setModalAction} modalContent={modalContent} />
        </div>
    )
}

export default Tools