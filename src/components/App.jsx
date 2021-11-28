import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PlantInfo from "./PlantInfo";

const App = () => {
    const [active, setActive] = useState(1);

    const changePlant = (plant_num) => {
        setActive(plant_num);
    }

    return(
        [<h1 className="Plantas" key="1">Plantas:</h1>,
        <div key="2">
            <Navbar activePlant={active} setActivePlant={changePlant}></Navbar>
            <PlantInfo activePlant={active} className={`Planta${active}`}></PlantInfo>
        </div>]
    )
};

export default App;