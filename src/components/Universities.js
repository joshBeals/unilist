import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_COUNTRY } from '../queries/countries';
import Spinner from './Spinner';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Universities = () => {

    const [universities, setUniversities] = useState(null);

    const params = useParams();

    const { loading, error, data } = useQuery(FETCH_COUNTRY, { variables: { code: params.id } });

    useEffect(() => {
        if(!loading) fetchUniversities(data.country.name);
    },[loading]);

    const fetchUniversities = async (country) => {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
        console.log(response.data);
        setUniversities(response.data);
    }

    if (loading) return <Spinner />

    if(!loading){
        if(data.country == null){
            return(
                <div className='continent-main text-center mt-5'>
                    <h1 className='mb-5'>Invalid Country Code!!!</h1>
                </div>
            );
        }
    }

    let renderUniverisities;
    if(universities !== null){
        renderUniverisities = universities.map((uni, key) => {
            return(
                <div className='university col-lg-7 col-md-8 col-sm-12' key={key}>
                    <a href={uni.web_pages[0]}>{uni.name}</a>
                </div>
            );
        });
    }
    
    return(
        <div className='continent-main text-center'>
            <h1 className='mb-5'>List of all Universities in {!loading ? <span>{data.country.name}</span> : ''}</h1>
            <div className='container'>
                <div className='row g-0 justify-content-center'>
                    {universities !== null && (universities.length == 0 ? <h1>No University Found!!!</h1> : renderUniverisities)}
                </div>
            </div>
            {!loading && <Link className="btn back-btn text-white" to={`/countries/${data.country.continent.code}`}>Go Back</Link>}
        </div>
    );
}

export default Universities;