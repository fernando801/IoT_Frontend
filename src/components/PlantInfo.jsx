import React, { useEffect, useState } from "react";
import getData from "../utils/getData";
import plantImage from "../assets/images/plant.svg"

const PlantInfo = (props) => {
  // const [plantData, setPlantData] = useState();

  let timerId;

  // useEffect(async() => {
  //   console.log(`clearing timer id ${timerId}`);
  //   clearInterval(timerId);
    
  //   const updateData = async () => {
  //     console.log(props.activePlant);
  //     const data = await getData(props.activePlant);
  //     setPlantData(data);
  //   }
  //   await updateData();
  //   // setTimeout(updateData,5000);
  //   timerId = setInterval(updateData, 5000);
  //   console.log(timerId);
  //   return function cleanup() {
  //     console.log('Se fue');
  //     clearInterval(timerId);
  //   };
  // }, [props.activePlant]);

  if(props.data){
    return(
      <div className="plantInfo">
        <img className="plantInfo_image"src={plantImage} alt="planta"/>
        <div className="plantInfo_data">
          <h1 className="plantInfo_title">Planta {props.activePlant}</h1>
          <ul className="plantInfo_list">
              <p>Planta: {props.data.planta}</p>
              <p>Temperatura: {props.data.temperatura.toFixed(2)} °C</p>
              <p>Luz: {props.data.iluminacion}</p>
              <p>Humedad: {props.data.humedad}</p>
              <p>Riego: {props.data.regando}</p>
              <p>Tiempo: {props.data.tiempo}</p>
          </ul>
        </div>
      </div>
    );
  }else{
    return(<h1 className="loading">Loading...</h1>)
  }
};

export default PlantInfo;