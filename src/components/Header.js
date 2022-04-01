import hero from '../assets/img/hero.jpg';
import React from 'react';

const Header = () => {
    return(
        <div className='header'>
            <div className='inner text-center'>
                <h1 className='mb-5'><span>Uni</span>List</h1>
                <h3>UniList doesn't just help you get information about universities in the world but also teaches you facts about continents and countries</h3>
            </div>
        </div>
    );
}

export default Header;