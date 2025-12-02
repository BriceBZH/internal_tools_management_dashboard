import Header from '../components/Header'
import RecentTools from '../components/RecentTools'
import Kpis from '../components/Kpis'

function Dashboard() {
    return (
        <div>
            <Header />
            <h1>Internal Tools Dashboard</h1>
            <p>Monitor and manage your organization's software tools and expenses</p>
            <Kpis />
            <RecentTools />
        </div>
    )
}

export default Dashboard