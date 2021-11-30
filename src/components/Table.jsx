import React, { useEffect, useState } from "react";

const Table = (props) => {
  const tableRows = props.data.map((row) => {
    return(
      <tr key={row.id.toString()}>
        <td>{row.id}</td>
        <td>{row.planta}</td>
        <td>{row.regando === 1? 'Si' : 'No'}</td>
        <td>{row.humedad  === 1? 'Humedo' : 'Seco'}</td>
        <td>{row.temperatura.toFixed(2)} °C</td>
        <td>{row.iluminacion === 1? 'Con Luz' : 'Sin Luz'}</td>
        <td>{(new Date(row.tiempo)).toLocaleDateString()} {(new Date(row.tiempo)).toLocaleTimeString()}</td>
      </tr>
    );
  });

  return(
    <div className="tableContainer">
      <div>
      <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Planta</td>
              <td>Regando</td>
              <td>Humedad</td>
              <td>Temperatura</td>
              <td>Iluminacion</td>
              <td>Tiempo</td>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;