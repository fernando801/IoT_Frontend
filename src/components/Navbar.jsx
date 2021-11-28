import React, { useEffect, useState } from "react";

const Navbar = (props) => {
  const plants = [1,2,3,4,5,6];

  const plantButtons = plants.map(plant_num =>{

    const handleClick = (e) => {
      e.preventDefault();
      props.setActivePlant(plant_num)
    }

    return(
      <button key={plant_num.toString()} 
            onClick={handleClick}
            className={`${plant_num === props.activePlant ? 'activeButton' : 'unactiveButton'} 
                        Navbar_button`}>
      <span>Planta </span>{plant_num}
    </button>
    );
    
  });
  return(
      <nav className="Navbar">
        {plantButtons}
      </nav>
  )
};

export default Navbar;