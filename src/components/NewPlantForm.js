import React, {useState} from "react";

function NewPlantForm({ onSetForm, form, onSubmitForm}) {

 
console.log(form)


  
  


  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form
      onSubmit={onSubmitForm}
      >
        <input 
        onChange={onSetForm}
        value={form.name} type="text" name="name" placeholder="Plant name" />
        <input 
        onChange={onSetForm}
        value={form.image} type="text" name="image" placeholder="Image URL" />
        <input 
        onChange={onSetForm}
        value={form.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
