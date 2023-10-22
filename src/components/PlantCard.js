import React, { useState, useEffect} from "react";

function PlantCard({plant, onUpdatePlant, updatedPlant, onDelete}) {
  
  const [isClicked, setIsClicked ] = useState(false)
  const [price, setPrice] = useState(plant.price)

  function handleClick () {
    setIsClicked(isClicked => !isClicked)
  }
  function handleSubmit (event) {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: price,
          }),
        })
  }

  function handleDelete (plant) {
    onDelete(plant)
  }

  function handleChange (event) {
    setPrice(event.target.value)
  }
  console.log(price)
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <form
      onSubmit={handleSubmit}
      >

      <pre className='container'>
      <p>$</p> 
      <input
      onChange={handleChange}
      value={price}
      >
      </input>
      </pre>

      <button>Update Price</button>
      </form>
      
        <button 
        onClick={handleClick}
        className={isClicked? '': 'primary'}>{isClicked ?'Out of Stock': 'In Stock'}</button>
      <button
      onClick={()=>handleDelete(plant)}
      >Delete</button>
    </li>
  );
}

export default PlantCard;
