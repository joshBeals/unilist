import '../assets/css/app.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Continent from './Continent';
import Footer from './Footer';


const App = () => {

    return(
        <div className='main'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Continent />} />
                </Routes>
            </BrowserRouter>
            {/* <Footer /> */}
        </div>
    );

}

export default App;