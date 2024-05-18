import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Search.css'

function Search({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange=(e)=>{
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    if (onSearch) {
        if (newSearchTerm.trim() === '') {
            onSearch(null); // Pass null or empty value to indicate no filtering
        } else {
            onSearch(newSearchTerm);
        }
    }
}
const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
        console.log("0000",searchTerm)
        onSearch(searchTerm); // Pass the value of searchTerm
    }
}

  return (
    <>
     <Form inline className='search'>
           
                <FormControl className='search-input'
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ paddingRight: '2.5rem' }} // Adjust the right padding to accommodate the search icon
                />
               
                    <i class="fa-solid fa-magnifying-glass"style={{ cursor: 'pointer',  marginTop: "14px",
    marginLeft: "-23px" }} onClick={handleSearchSubmit} ></i>
                  
        </Form>
    </>
  )
}

export default Search
