import { Sun, Bell, Settings } from "lucide-react";

function Notifications() {
    return (
        <div className="flex flex-row">
            <Sun size={24} className="text-white" />
            <Bell size={24} className="text-white" />
            <Settings size={24} className="text-white" />
        </div>
    )
}

export default Notifications