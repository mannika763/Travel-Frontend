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

      const [selectedValues, setSelectedValues] = useState([]);
    
     
      const handleChange = (values) => {
        console.log(values); 
        onChange(values)
        setSelectedValues(values)
      };
    
    
    
      return (
        <>
          <Select
            multi
            options={options}
            onChange={handleChange} 
          
            style={{ width: '100%', color: "black" }}
            contentRenderer={() => (
              <div>
                {selectedValues.length > 0
                  ? `${selectedValues.length} selected`
                  : "Your Interests?"}
              </div>
            )}
          />
        </>
      );
    
}

export default FilterByPlaces
