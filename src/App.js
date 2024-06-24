import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';
import Footer from './pages/Footer';

function App() {

    const [pageActive, modifierPageActive] = useState("Home");
    const [logements, modifierLogements] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/logements.json", {
            responseEncoding: "utf8"
        })
            .then((results) => {
                modifierLogements((l) => results.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <BrowserRouter>
                <Navbar pageActive={pageActive} />
                <div className="top">
                    <Routes>
                        <Route index path='/' element={<Home logements={logements} modifierPageActive={modifierPageActive} />} />
                        <Route path='/about' element={<About modifierPageActive={modifierPageActive} />} />
                        <Route path="/housing/:houseId" element={<Housing logements={logements} modifierPageActive={modifierPageActive} />} />
                        <Route path='*' element={<Error modifierPageActive={modifierPageActive} />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
