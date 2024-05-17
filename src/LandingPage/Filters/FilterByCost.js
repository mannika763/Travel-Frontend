import React from 'react'
import "./FilterByCost.css"
import Select from 'react-select';

function FilterByCost({onChange}) {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

    const handleChange = (values) => {
        console.log(values.value); 
        onChange(values.value);
      };

  return (
    <>
   
        <Select
            multi
            options={options}
            onChange={handleChange} 
            placeholder="Budget per person?" 
            
          />
          
    </>
  )
}

export default FilterByCost
