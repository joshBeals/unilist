import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_COUNTRIES } from '../queries/countries';
import Spinner from './Spinner';
import { Link, useParams } from 'react-router-dom';

const Countries = () => {

    const params = useParams();
    
    const { loading, error, data } = useQuery(FETCH_COUNTRIES, { variables: { code: params.id } });

    if (loading) return <Spinner />

    if(!loading){
        if(data.continent == null){
            return(
                <div className='continent-main text-center mt-5'>
                    <h1 className='mb-5'>Invalid Continent Code!!!</h1>
                </div>
            );
        }
    }

    let renderContries = null;
    if(!loading){
        renderContries = data.continent.countries.map(country => {
            return(
                <div className='col-lg-3 col-md-6 col-sm-12' key={country.code}>
                    <div className="card m-3 p-3">
                        <div className="card-body">
                            <img className='mb-3' src={`https://flagcdn.com/80x60/${country.code.toLowerCase()}.png`} alt={country.name} />
                            <h3 className="card-title">{country.name}</h3>
                            <p className="card-text">{country.capital}</p>
                            <Link className="btn text-white" to={`/`}>See Universities</Link>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return(
        <div className='continent-main text-center'>
            <h1 className='mb-5'>List of all Countries in {!loading ? <span>{data.continent.name}</span> : ''}</h1>
            <div className='container'>
                <div className='row g-0 justify-content-center'>
                    {renderContries}
                </div>
            </div>
            <Link className="btn back-btn text-white" to="/">Go Back</Link>
        </div>
    );
}

export default Countries;