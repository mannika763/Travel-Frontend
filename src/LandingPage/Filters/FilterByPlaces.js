import React, { useState } from 'react'
import "./FilterByPlaces.css"
import Select from 'react-dropdown-select';


function FilterByPlaces({onChange}) {
    const [options, setOptions] = useState([
        { label: "Temple", value: "Temple" },
        { label: "Mountain", value: "Mountain" },
        { label: "Sea", value: "Sea" },
        { label: "Historical", value: "Historical" },
        { label: "Island", value: "Island" }
      ]);
    
     
      const handleChange = (values) => {
        console.log(values); 
        onChange(values)
      };
    
      return (
        <>
          <Select
            multi
            options={options}
            onChange={handleChange} 
            placeholder="Your Interests?" 
            style={{ width: '100%' }}
          />
        </>
      );
    
}

export default FilterByPlaces
