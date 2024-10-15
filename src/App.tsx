import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicationView from './views/PublicationView.tsx';
import PublicationDetail from './components/PublicationDetail.tsx';
import Container from './components/styles/container/container.ts';


const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>

          <Route path="/content-showcase/" element={<PublicationView />} />
          
          <Route path="/publications/:id" element={<PublicationDetail />} />

          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
