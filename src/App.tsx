import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicationView from './views/PublicationView.tsx';
import PublicationDetail from './components/PublicationDetail.tsx';
import Container from './components/styles/container/container.ts';
import Home from './views/Home.tsx';
import About from './views/About.tsx';
import Contact from './views/Contact.tsx';
import Sidebar from './components/Sidebar.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/publications" element={<PublicationView />} />
              <Route path="/publications/:id" element={<PublicationDetail />} />
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </Container>
        </div>
      </div>
    </Router>
  );
};

export default App;
