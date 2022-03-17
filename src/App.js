import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './Container/About/About';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import Skills from './Container/Skills/Skills';
import Testimonial from './Container/Testimonial/Testimonial';
import Work from './Container/Work/Work';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;