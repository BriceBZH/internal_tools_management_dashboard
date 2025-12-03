import CostAnalytics from "../components/CostAnalytics"

function Analytics() {
    return (
        <div className="p-6">
            <h1 className="font-inter">Internal Tools Dashboard</h1>
            <p>Monitor and manage your organization's software tools and expenses</p>
            <CostAnalytics />
        </div>
    )
}

export default Analytics