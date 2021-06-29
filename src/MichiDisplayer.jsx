import React from 'react';

const MichiDisplayer = ({michi}) => {
    
    if(michi==null)
        return (<div className="col-9 text-center">
                    <h3>Selecciona un Michi</h3>
                </div>)
    return (<div className="col-9 text-center">
        <h3>{michi.Nombre}</h3>
        <h5>{michi.Caracteristicas}</h5>
        <ul className="text-start text-light">
            {michi.Pesos.map((peso, index, Pesos) => {
                const classes=(Pesos[index-1] && parseInt(Pesos[index-1].Peso) > parseInt(peso.Peso))?"bg-danger":"bg-success";
                return <li className={classes}>{peso.Fecha}: {peso.Peso} gr</li>
            })}
        </ul>
    </div>);
}

export default MichiDisplayer;