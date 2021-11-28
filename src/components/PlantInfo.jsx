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

  return(
    <div>
      
      {plantData && plantData.id === props.activePlant
      ?
      [<img src="" alt="siu" />,
      <h1>Planta {props.activePlant}</h1> ,
      <ul>
          <li><span>Planta: </span><span>{plantData.id}</span></li>
          <li><span>Temperatura: </span><span>{plantData.temperature}</span></li>
          <li><span>Luz: </span><span>{plantData.light}</span></li>
          <li><span>Humedad: </span><span>{plantData.humidity}</span></li>
          <li><span>Riego: </span><span>{plantData.watering}</span></li>
      </ul>]
      :<h1>Loading...</h1>}
    </div>
    
  )
};

export default PlantInfo;