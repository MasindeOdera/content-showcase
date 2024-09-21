import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicationList from './components/PublicationList';
import PublicationDetail from './components/PublicationDetail';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <h1>Content Showcase</h1>
        <Routes>
          {/* Route for listing publications */}
          <Route path="/" element={<PublicationList />} />
          
          {/* Route for viewing publication details */}
          <Route path="/publications/:id" element={<PublicationDetail />} />

          {/* Fallback Route, just in case there is an issue */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
