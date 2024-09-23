import React from 'react';
import './style.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarProvider } from './components/SidebarContext.tsx';
import VeterinariansSection from './components/VeterinariansSection.tsx';
import VetSection from './components/VetSection.tsx';
import UserSection from './components/UserSection.tsx';
import ChatSection from './components/ChatSection.tsx';
import TestModal from './components/TestModal.tsx';
import PerfilVetAdmin from './components/PerfilVetAdmin.tsx';

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
