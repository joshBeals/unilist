import hero from '../assets/img/hero.jpg';
import React from 'react';

const Header = () => {
    return(
        <div className='header'>
            <div className='inner text-center'>
                <h1 className='mb-5'><span>Uni</span>List</h1>
                <h3>Get information about any university in the world from one place</h3>
            </div>
        </div>
    );
}

export default Header;