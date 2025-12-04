import RecentTools from '../components/RecentTools'
import Kpis from '../components/Kpis'

function Dashboard({search, handleAction, modalAction, setModalAction, modalContent, handleModal, modal, setModal, handleContentModal, setTools, tools}) {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold">Internal Tools Dashboard</h1>
            <p>Monitor and manage your organization's software tools and expenses</p>
            <Kpis />
            <RecentTools search={search} modal={modal} tools={tools} setTools={setTools} setModal={setModal} handleModal={handleModal} handleAction={handleAction} handleContentModal={handleContentModal} modalAction={modalAction} setModalAction={setModalAction} modalContent={modalContent} />
        </div>
    )
}

export default Dashboard