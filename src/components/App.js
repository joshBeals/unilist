import '../assets/css/app.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Continents from './Continents';
import Footer from './Footer';
import Countries from './Countries';
import Universities from './Universities';


const App = () => {

    return(
        <div className='main'>
            <Header />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Continents />} />
                    <Route path="/countries/:id" element={<Countries />} />
                    <Route path="/universities/:id" element={<Universities />} />
                </Routes>
            </HashRouter>
            {/* <Footer /> */}
        </div>
    );

}

export default App;