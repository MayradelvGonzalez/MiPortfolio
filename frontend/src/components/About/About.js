import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './About.css';

function About() {
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('/backend/json/about.json')
            .then(
                res => setInformation(res.data[0])

            )
    }, [setInformation])

    return (

        <div className="About">
            <div className="div-foto">
                <img className="foto-perfil" alt="foto de perfil" src={information.photo}></img>
            </div>
            <div className="descripcion">
                <h1>{information.name}</h1>
                <h2>{information.rol}</h2>
                <p></p>
                <ul className="skills">
                  {information.skills?.map((skill,index) => (
   {skill}
                  )
               
                  )}
                </ul>

            </div>
        </div>


    )


}

export default About;