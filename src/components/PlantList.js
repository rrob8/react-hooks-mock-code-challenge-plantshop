import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({newPlant, searchTerm}) {


  const [plants, setPlants ] = useState([])
 
  const [deletedPlant, setDeletedPlant] = useState({})

  function onDelete (plant) {
    setDeletedPlant(plant)
  }

  useEffect (()=> {
    const updated = plants.filter(plant=> plant !== deletedPlant)
    setPlants(updated)

    fetch(`http://localhost:6001/plants/${deletedPlant.id}`, {
      method: "DELETE",
    })
  },[deletedPlant])

  

 
  

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
      <PlantCard key={plant.id} plant={plant} 
      onDelete={onDelete}
      />
      )}</ul>
  );
}

export default PlantList;
