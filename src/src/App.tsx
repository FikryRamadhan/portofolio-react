// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Portofolio from './Pages/Portofolio';

function App() {
    return (
        <div className="kanit-semibold">
            <Router>
            <Navbar />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portofolio' element={<Portofolio />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;