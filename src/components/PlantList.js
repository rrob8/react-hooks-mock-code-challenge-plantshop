import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({newPlant, searchTerm}) {


  const [plants, setPlants ] = useState([])
  const [updatedPlant, setUpdatedPlant] = useState({})
  

  function updatePlant(plant) {
    setUpdatedPlant(plant)
    fetch(`http://localhost:6001/plants/${plant.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: 0,
          }),
        })
           
  }

 
  

  useEffect(()=> {
    fetch(`http://localhost:6001/plants`)
    .then(response=> response.json())
    .then(data=> setPlants(data))
  },[])

  useEffect(()=>{
    
  setPlants([...plants, newPlant])
    

  },[newPlant])

  useEffect(()=>{
    
    
      fetch(`http://localhost:6001/plants`)
    .then(response=> response.json())
    .then(data=> {
    const searchedPlants = data.filter(plant=> plant.name.startsWith(searchTerm))
    setPlants(searchedPlants)
    })
    
  
  },[searchTerm])





  console.log(plants)
  return (
    <ul className="cards">{plants.map((plant)=>
      <PlantCard key={plant.id} plant={plant} onUpdatePlant={updatePlant} updatedPlant={updatedPlant} />
      )}</ul>
  );
}

export default PlantList;
