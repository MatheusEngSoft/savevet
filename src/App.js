import React from 'react';
import './style.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarProvider } from './components/SidebarContext';
import VeterinariansSection from './components/VeterinariansSection';
import VetSection from './components/VetSection';
import UserSection from './components/UserSection';
import ChatSection from './components/ChatSection';
import SelectCard from './components/SelectCard';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <Routes>
          <Route path="/veterinarians" element={<VeterinariansSection />} />
          <Route path="/vet-dashboard" element={<VetSection />} />
          <Route path="/user-dashboard" element={<UserSection />} />
          <Route path="/chat" element={<ChatSection />} />
          <Route path="/billing-address" element={<SelectCard />} />
        </Routes>
      </SidebarProvider>
    </Router>
  );
}

export default App;
