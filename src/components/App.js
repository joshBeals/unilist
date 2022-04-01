import '../assets/css/app.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Continent from './Continent';


const App = () => {

    return(
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Continent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;