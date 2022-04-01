import React from 'react';

const Spinner = () => {
    return(
        <div className='spinner'>
            <div className="spinner-border" style={{color: 'orange'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;