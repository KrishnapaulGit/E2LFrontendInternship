import React from 'react';
import './App.css';
import Header from './components/Header';
import CoursesSection from './components/CoursesSection';
import HeroSection from './components/HeroSection';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <HeroSection/>
    <CoursesSection/>
    <JoinUs />
    <Footer/>
      
    </div>
  );
}

export default App;
