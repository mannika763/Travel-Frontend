import React,{useState} from 'react'
import "./FilterByPeople.css"
// import Select from 'react-select';
import Select from 'react-dropdown-select';


function FilterByPeople({onChange}) {
  const [selectedValues, setSelectedValues] = useState([]);

    const options = [
      { value: "1 traveler",label: "1 traveler" },
      { value: "2 travelers",label: "2 travelers" },
      { value: "3 travelers",label: "3 travelers" },
      { value: "4 travelers",label: "4 travelers" },
      { value: "5 travelers",label: "5 travelers" },
      { value: "6 travelers",label: "6 travelers" },
      { value: "7 travelers",label: "7 travelers" },
      { value: "8 travelers",label: "8 travelers" },
      { value: "9 travelers",label: "9 travelers" },
      { value: "10 travelers",label: "10 travelers" }
      ];

      const handleChange = (values) => {
        console.log(values);
        setSelectedValues(values.value)
        onChange(values.value) 
      };

  return (
    <>
      {/* <Select style={{ width: '100%',color: "black" }}
        className='people'
         placeholder="No. of travellers?" 
        onChange={handleChange}
        options={options}
        
      /> */}
        <Select
            
                options={options}
                onChange={handleChange}
                values={selectedValues}
                placeholder="No. of travellers?" 
            style={{ width: '100%'}}
           
          />
    </>
  )
}

export default FilterByPeople
