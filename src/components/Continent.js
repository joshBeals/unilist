import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_COUNTRIES } from '../queries/continents';
import Spinner from './Spinner';

const Continent = () => {

    const { loading, error, data } = useQuery(ALL_COUNTRIES);

    if (loading) return <Spinner />

    return(
        <div className='continent-main text-center mt-5'>
            <h1>List of all <span>Continents</span></h1>
            <div className='container'>
                <div className='row'>

                </div>
            </div>
        </div>
    );
}

export default Continent;