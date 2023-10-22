import React, { useState, useEffect} from "react";

function PlantCard({plant, onUpdatePlant, updatedPlant}) {
  
  const [isClicked, setIsClicked ] = useState(false)

  function handleClick () {
    setIsClicked(isClicked => !isClicked)
  }
  useEffect(()=>{
   

       
     
  },[updatedPlant])
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      
        <button 
        onClick={handleClick}
        className={isClicked? '': 'primary'}>{isClicked ?'Out of Stock': 'In Stock'}</button>
      
    </li>
  );
}

export default PlantCard;
