import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_COUNTRIES } from '../queries/continents';

const Continent = () => {
    // const { loading, error, data } = useQuery(ALL_COUNTRIES);
    return(
        <div>
            Continents
        </div>
    );
}

export default Continent;