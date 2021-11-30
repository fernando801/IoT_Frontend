import React, { useEffect, useState } from "react";
import Table from "./Table";
import pImg0 from "../assets/images/plant0.svg"
import pImg1 from "../assets/images/plant.svg"
import pImg2 from "../assets/images/plant2.svg"
import pImg3 from "../assets/images/plant3.svg"
import pImg4 from "../assets/images/plant4.svg"
import pImg5 from "../assets/images/plant5.svg"
import pImg6 from "../assets/images/plant6.svg"

const PlantInfo = (props) => {

  const plantImages = [pImg0, pImg1, pImg2, pImg3, pImg4, pImg5, pImg6];

  if(props.data){
    return(
      [<div className="plantInfo" key="1">
        <img className="plantInfo_image"src={plantImages[props.activePlant]} alt="planta"/>
        <div className="plantInfo_data">
          <h1 className="plantInfo_title">Planta {props.activePlant}</h1>
          <ul className="plantInfo_list">
              <p>Planta: {props.data[0].planta}</p>
              <p>Temperatura: {props.data[0].temperatura.toFixed(2)} °C</p>
              <p>Luz: {props.data[0].iluminacion === 1? 'Con Luz' : 'Sin Luz'}</p>
              <p>Humedad: {props.data[0].humedad === 1? 'Humedo' : 'Seco'}</p>
              <p>Regando: {props.data[0].regando === 1? 'Si' : 'No'}</p>
              <p>Tiempo: {(new Date(props.data[0].tiempo)).toLocaleDateString()} {(new Date(props.data[0].tiempo)).toLocaleTimeString()}</p>
          </ul>
        </div>
      </div>,
      <div key="2"><h1 className="plantInfo_recientes" >Datos Recientes: </h1></div>,
      <Table data={props.data} key="3"></Table>]
    );
  }else{
    return(<h1 className="loading">Loading...</h1>)
  }
};

export default PlantInfo;