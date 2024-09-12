import React from 'react';
import './style.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarProvider } from './components/SidebarContext';
import VeterinariansSection from './components/VeterinariansSection';
import VetSection from './components/VetSection';
import UserSection from './components/UserSection';
import ChatSection from './components/ChatSection';
import TestModal from './components/TestModal';
import PerfilVetAdmin from './components/PerfilVetAdmin';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <Routes>
          <Route path="/veterinarians" element={<VeterinariansSection />} />
          <Route path="/vet-dashboard" element={<VetSection />} />
          <Route path="/user-dashboard" element={<UserSection />} />
          <Route path="/chat" element={<ChatSection />} />
          <Route path="/test-modal" element={<TestModal />} />
          <Route path="/perfil-vetadmin" element={<PerfilVetAdmin/>} />
        </Routes>
      </SidebarProvider>
    </Router>
  );
}

export default App;
