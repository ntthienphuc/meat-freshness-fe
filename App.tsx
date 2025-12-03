import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Scanner from './components/Scanner';
import MeatDictionary from './components/MeatDictionary';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import History from './components/History';
import LandingPage from './components/LandingPage';
import Premium from './components/Premium';
import AIAssistant from './components/AIAssistant';
import Account from './components/Account';

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
          <Route path="/premium" element={<Premium />} />
          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;