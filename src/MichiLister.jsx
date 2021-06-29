import React from 'react';
import './MichiLister.css';


const MichiLister = ({michi, setMichi}) =>{
    
    const clickHandler = () => {
        setMichi(michi);
    }

    return (
            <div className="MichiElement" onClick={clickHandler}><label>{michi.Nombre}</label>
                <h6>{michi.Caracteristicas}</h6>
            <hr/></div>
        )
} 


export default MichiLister;