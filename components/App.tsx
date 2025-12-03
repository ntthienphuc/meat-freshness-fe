import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Scanner from './components/Scanner';
import MeatDictionary from './components/MeatDictionary';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import History from './components/History';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/scan" element={<Scanner />} />
          <Route path="/dictionary" element={<MeatDictionary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;