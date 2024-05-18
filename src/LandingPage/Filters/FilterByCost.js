import React from 'react'
import "./FilterByCost.css"
import Select from 'react-select';

function FilterByCost({onChange}) {

    const options = [
      { value: "1000$ - 2000$",label: "1000$ - 2000$" },
      { value: "1500$ - 2500$" ,label: "1500$ - 2500$" },
      { value: "2000$ - 3000$" ,label: "2000$ - 3000$" },
      { value: "2500$ - 3500$", label: "2500$ - 3500$" },
      { value: "3000$ - 4000$" ,label: "3000$ - 4000$" },
      { value: "3500$ - 4500$", label: "3500$ - 4500$" },
      { value: "4000$ - 5000$" ,label: "4000$ - 5000$" },
      { value: "4500$ - 5500$" ,label: "4500$ - 5500$" },
      { value: "5000$ - 6000$" ,label: "5000$ - 6000$" },
      { value: "5500$ - 6500$" ,label: "5500$ - 6500$" }

      ];

    const handleChange = (values) => {
        console.log(values.value); 
        onChange(values.value);
      };

  return (
    <>
   
        <Select
           className='cost'
            options={options}
            onChange={handleChange} 
            placeholder="Budget per person?" 
            
          />
          
    </>
  )
}

export default FilterByCost
