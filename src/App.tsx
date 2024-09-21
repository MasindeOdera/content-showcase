import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicationView from './views/PublicationView';
import PublicationDetail from './components/PublicationDetail';
import Container from './components/styles/container/Container';


const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>
          {/* Route for listing publications */}
          <Route path="/" element={<PublicationView />} />
          
          {/* Route for viewing publication details */}
          <Route path="/publications/:id" element={<PublicationDetail />} />

          {/* Fallback Route, just in case there is an issue */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
