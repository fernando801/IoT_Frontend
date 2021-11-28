import React, { useEffect, useState } from "react";
import getData from "../utils/getData";

const PlantInfo = (props) => {
  const [plantData, setPlantData] = useState();

  useEffect(() => {
    const updateData = async () => {
      console.log(props.activePlant);
      const data = await getData(props.activePlant);
      setPlantData(data);
      return updateData;
    }

    const timerId = setInterval(updateData, 500);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [props.activePlant]);

  if(plantData && plantData.id === props.activePlant){
    return(
      <div className="plantData">
        <img src="" alt="planta"/>
        <div className="plantData_info">
          <h1 className="plantData_title">Planta {props.activePlant}</h1>
          <ul className="plantData_list">
              <p>Planta: {plantData.id}</p>
              <p>Temperatura: {plantData.temperature}</p>
              <p>Luz: {plantData.light}</p>
              <p>Humedad: {plantData.humidity}</p>
              <p>Riego: {plantData.watering}</p>
          </ul>
        </div>
      </div>
    );
  }else{
    return(<h1 className="loading">Loading...</h1>)
  }
};

export default PlantInfo;