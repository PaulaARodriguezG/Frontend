import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto py-8">
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;