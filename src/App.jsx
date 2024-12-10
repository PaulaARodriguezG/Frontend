import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes'; 
import './assets/css/tailwind.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto py-8">
        <Routes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;