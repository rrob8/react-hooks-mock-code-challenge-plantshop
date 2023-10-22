import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
   })

   const [searchTerm, setSearchTerm ] = useState('')

   function onSearch (event) {
    setSearchTerm(event.target.value)
   }

   const [newestPlant, setNewPlant] = useState({})

   function handleSubmit (event) {
    event.preventDefault()
    const newObj ={
      name: form.name,
      image: form.image,
      price: form.price,
    }
    setNewPlant(newObj)

    fetch(`http://localhost:6001/plants`,{
    method: "POST",
    headers: {
          "Content-Type": "application/json",
        },
    body: JSON.stringify(newObj),
      })
    .then((r) => r.json())
      
  }

  function handleInputChange (e) {
    const {name, value} = e.target
    setForm((oldData)=>({
      ...oldData,
      [name]:value,
    }));
  }

  

  return (
    <main>
      <NewPlantForm  form={form} onSetForm={handleInputChange} onSubmitForm={handleSubmit}/>
      <Search onSearch={onSearch} searchTerm={searchTerm} />
      <PlantList newPlant={newestPlant} searchTerm={searchTerm}/>
    </main>
  );
}

export default PlantPage;
