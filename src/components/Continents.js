import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_COUNTINENTS } from '../queries/continents';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const Continents = () => {

    const { loading, error, data } = useQuery(ALL_COUNTINENTS);

    let renderContinents = null;
    if(!loading){
        renderContinents = data.continents.map(({ code, name, countries }) => {
            return(
                <div className='col-lg-4 col-md-6 col-sm-12' key={code}>
                    <div className="card m-3 p-3">
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">{countries.length} Countries</p>
                            <p>(Including diaputed areas)</p>
                            <Link className="btn text-white" to={`/countries/${code}`}>Explore</Link>
                        </div>
                    </div>
                </div>
            );
        });
    }

    if (loading) return <Spinner />

    return(
        <div className='continent-main text-center'>
            <h1 className='mb-5'>List of all <span>Continents</span></h1>
            <div className='container'>
                <div className='row g-0 justify-content-center'>
                    {renderContinents}
                </div>
            </div>
        </div>
    );
}

export default Continents;