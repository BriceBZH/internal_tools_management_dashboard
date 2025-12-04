import { TrendingUpDown, Wrench, Users, Building2 } from "lucide-react";

function Kpis() {
    return (
        <ul className="grid gap-3 mb-6 mt-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <li className="border rounded-xl border-solid border-[#191919] p-5 min-h-30">
                <div className="flex flex-row justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">Monthly Budget</h3>
                    <TrendingUpDown size={24} className="text-white rounded-md bg-green-400" />
                </div>
                <p>€28,750/€30k</p>
                <p className="inline-block py-1 px-1 text-xs rounded-md bg-green-400">+12%</p>
            </li>
            <li className="border rounded-xl border-solid border-[#191919] p-5 min-h-30">
                <div className="flex flex-row justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">Active Tools</h3>
                    <Wrench size={24} className="text-white rounded-md bg-blue-500" />
                </div>
                <p>147</p>
                <p className="inline-block py-1 px-1 text-xs rounded-md bg-blue-500">+8</p>
            </li>
            <li className="border rounded-xl border-solid border-[#191919] p-5 min-h-30">
                <div className="flex flex-row justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">Departments</h3>
                    <Building2 size={24} className="text-white rounded-md bg-orange-400" />
                </div>
                <p>8</p>
                <p className="inline-block py-1 px-1 text-xs rounded-md bg-orange-400">+2</p>
            </li>
            <li className="border rounded-xl border-solid border-[#191919] p-5 min-h-30">
                <div className="flex flex-row justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">Cost/User</h3>
                    <Users size={24} className="text-white rounded-md bg-red-500" />
                </div>
                <p>€156</p>
                <p className="inline-block py-1 px-1 text-xs rounded-md bg-red-500 mb-0">-12€</p>
            </li>
        </ul>
    )
}

export default Kpis