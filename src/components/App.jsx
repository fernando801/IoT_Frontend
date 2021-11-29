import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PlantInfo from "./PlantInfo";
import getData from "../utils/getData";

const App = (props) => {
    const [active, setActive] = useState(1);
    const [plantData, setPlantData] = useState();
    const [timer, setTimer] = useState();

    const changePlant = (plant_num) => {
        setActive(plant_num);
    }


    useEffect(async() => {
        clearInterval(timer);
        
        const updateData = async () => {
          console.log(active);
          const data = await getData(active);
          setPlantData(data);
        }

        await updateData();
        setTimer(setInterval(updateData, 5000));

        return function cleanup() {
          clearInterval(timer);
        };
      }, [active]);

    return(
        [<h1 className="Plantas" key="1">Plantas:</h1>,
        <div key="2">
            <Navbar activePlant={active} setActivePlant={changePlant}></Navbar>
            <PlantInfo data={plantData} activePlant={active} className={`Planta${active}`}></PlantInfo>
        </div>]
    )
};

export default App;