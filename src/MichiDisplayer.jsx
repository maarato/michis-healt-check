import React from 'react';
import { Line } from 'react-chartjs-2';

const MichiDisplayer = ({michi}) => {
    const pesos = michi.Pesos.map(peso => peso.Peso);
    const data = {
        labels:michi.Pesos.map(peso => peso.Fecha),
        datasets: [
          {
            label: 'Peso en Gramos',
            data: pesos,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    if(michi==null)
        return (<div className="col-9 text-center">
                    <h3>Selecciona un Michi</h3>
                </div>)
    return (<div className="col-9 text-center">
        <div className="row">
            <div className="col-3">
                <h3>{michi.Nombre}</h3>
                <h5>{michi.Caracteristicas}</h5>
                <ul className="text-start text-light">
                    {michi.Pesos.map((peso, index, Pesos) => {
                        const classes=(Pesos[index-1] && parseInt(Pesos[index-1].Peso) > parseInt(peso.Peso))?"bg-danger":"bg-success";
                        return <li key={index} className={classes}>{peso.Fecha}: {peso.Peso} gr</li>
                    })}
                </ul>
                <label className="border p-3">
                    Notas: {michi.Notas}
                </label>
            </div>
            <div className="col-9">
                <Line data={data} options={options} />
            </div>
        </div>
       
    </div>);
}

export default MichiDisplayer;