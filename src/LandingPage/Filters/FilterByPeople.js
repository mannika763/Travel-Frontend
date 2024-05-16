import React from 'react'

import Select from 'react-select';


function FilterByPeople({onChange}) {


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

      const handleChange = (values) => {
        console.log(values);
        onChange(values) 
      };

  return (
    <>
      <Select
         placeholder="No. of travellers?" 
        onChange={handleChange}
        options={options}
        style={{ width: '100%' }}
      />
    </>
  )
}

export default FilterByPeople
