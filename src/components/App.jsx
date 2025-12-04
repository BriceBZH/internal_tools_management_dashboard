import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Header from '../components/Header'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Tools from '../pages/Tools'
import Analytics from '../pages/Analytics'
import Settings from '../pages/Settings'

function App() {
  const [search, setSearch] = useState();
  const [modalAction, setModalAction] = useState();
  const [modalContent, setModalContent] = useState([]);
  const [modal, setModal] = useState(false);
  const [tools, setTools] = useState([]);
  {/* On nettoie ce que l'on récupère de la searchBar */}
  function handleSearch(searchValue) {
    const clean = searchValue.replace(/<[^>]*>?/gm, '').trim();
    setSearch(clean);
  }
  {/* Pour passer la modal d'active à caché */}
  function handleModal(etat) {
      setModal(etat);
  }
  {/* Pour récupérer les actions faites dans les tableaux */}
  function handleAction(id, actionType) {
      if (actionType === "Delete") {
          fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${id}`, {
              method: "DELETE",
          })
          .then(() => {
              setTools(prevTools => prevTools.filter(tool => tool.id !== id));
          })
          .catch(err => console.error(err));
      } else if (actionType === "View") {
          fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${id}`)
          .then((response) => response.json()) 
          .then((data) => {
              setModalContent(data);
              handleModal(true);
              setModalAction(actionType);
          })
          .catch(err => console.error(err));
      } else if (actionType === "Edit") {
          fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${id}`)
          .then((response) => response.json()) 
          .then((data) => {
              setModalContent(data);
              handleModal(true);
              setModalAction(actionType);
          })
          .catch(err => console.error(err));
      }
  }
  {/* On récupère les valeurs de la modal pour ajouter/editer un tool */}
  function handleContentModal(e) {
      e.preventDefault();
      setModal(false);
      const idTool = e.target.id.value;
      const tool = {
          id: e.target.id.value,
          name: e.target.name.value,
          description: e.target.description.value,
          vendor: e.target.vendor.value,
          category: e.target.category.value,
          monthly_cost: e.target.monthly_cost.value,
          previous_month_cost: e.target.previous_month_cost.value,
          owner_department: e.target.owner_department.value,
          status: e.target.status.value,
          website_url: e.target.website_url.value,
          active_users_count: e.target.active_users_count.value,
          icon_url: e.target.icon_url.value, 
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
      };
      if (modalAction === "Edit") {
          fetch(`https://tt-jsonserver-01.alt-tools.tech/tools/${idTool}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(tool)
          })
          .then(res => res.json())
          .then(updatedTool => {
              setTools(prevTools => prevTools.map(t => t.id === updatedTool.id ? updatedTool : t));
          })
          .catch(err => console.error(err));
      } else if (modalAction === "Add") {
          fetch('https://tt-jsonserver-01.alt-tools.tech/tools/', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(tool)
          })
          .then(res => res.json())
          .then(() => {
              setTools(prevTools => [...prevTools, tool]);
          })
          .catch(err => console.error(err));
      }
  }
  return (
    <>
      <div className="bg-[#212121] min-h-screen w-full flex justify-center">
          <div className="bg-black text-white p-4 max-w-6xl w-full">
          <BrowserRouter>
          <Header handleSearch={handleSearch}/>
            <Routes>
              <Route path="/" element={<Dashboard search={search} tools={tools} setTools={setTools} handleAction={handleAction} handleContentModal={handleContentModal} modal={modal} setModal={setModal} modalAction={modalAction} handleModal={handleModal} setModalAction={setModalAction} modalContent={modalContent}/>} />
              <Route path="/tools" element={<Tools search={search} tools={tools} handleAction={handleAction} handleContentModal={handleContentModal} modal={modal} setModal={setModal} modalAction={modalAction} handleModal={handleModal} setModalAction={setModalAction} modalContent={modalContent}/>} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App