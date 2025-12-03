import RecentTools from '../components/RecentTools'
import Kpis from '../components/Kpis'

function Dashboard({search}) {
    console.log(search)
    return (
        <div className="p-6">
            <h1 className="font-inter">Internal Tools Dashboard</h1>
            <p>Monitor and manage your organization's software tools and expenses</p>
            <Kpis />
            <RecentTools search={search}/>
        </div>
    )
}

export default Dashboard