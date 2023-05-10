import React, { useEffect, useState } from 'react';
import axios from'axios';
// import './Portfolio.css';

function Portfolio(){
    const [proyects, setProyects] = useState({});
    useEffect(()=> {
        axios.get('/backend/json/portfolio.json')
        .then(
            res => setProyects(res.data)
        
    )}, [setProyects])
    return(
        <>
        <div className="card">
        {proyects?.map((proy, index) => (
  <div className="cardDetalle">{proy.name}</div>
        )
      
        
        
        
        
        
        
        )}



            </div>
            </>
    )
}

export default Portfolio;