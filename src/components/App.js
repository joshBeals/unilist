import '../assets/css/app.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Continents from './Continents';
import Footer from './Footer';
import Countries from './Countries';


const App = () => {

    return(
        <div className='main'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Continents />} />
                    <Route path="/countries/:id" element={<Countries />} />
                </Routes>
            </BrowserRouter>
            {/* <Footer /> */}
        </div>
    );

}

export default App;