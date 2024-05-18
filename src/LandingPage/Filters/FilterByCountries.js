import React, {useState, useEffect} from 'react'
import Select from 'react-dropdown-select';
import "./FilterByCountries.css"
import continents from './Countries'


function FilterByCountries({ onChange }) {
  const [selectedValues, setSelectedValues] = useState([]);

        const options = continents.reduce((acc, continent) => {
            acc.push({ label: continent.name, value: continent.name, disabled: true }); // Disable continent names
            continent.countries.forEach(country => {
              acc.push({ label: country.name, value: country.name });
            });
            return acc;
          }, []);


          const handleChange = (values) => {
            setSelectedValues(values);
            onChange(values);
          };
        

        
          return (
            <>
              <Select
                multi
                options={options}
                onChange={handleChange}
                values={selectedValues}
          
            style={{ width: '100%'}}
            contentRenderer={() => (
              <div >
                {selectedValues.length > 0
                  ? `${selectedValues.length} selected`
                  : 'Where do you want to go?'}
              </div>
            )}
          />


    </>
  )
}

export default FilterByCountries
