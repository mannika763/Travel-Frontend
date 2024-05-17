import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                // Make the API request
                const response = await axios.get('http://localhost:8080/admin/dashboard');
               console.log(response.data)
                setData(response.data);
            } catch (error) {
                // Handle any errors that occur during the fetch
                setError(error);
            } finally {
                // Indicate that loading is complete
                setLoading(false);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }



  return (
    <div>
    
        <div className="table" id="results">
        <div className="theader">
          <div className="table_header">Full Name</div>

          <div className="table_header">Email</div>
          <div className="table_header">Phone</div>{" "}
          <div className="table_header">Duration</div>
          <div className="table_header">Date</div>
          <div className="table_header">Budget</div>
          <div className="table_header">Countries</div>
          <div className="table_header">Places</div>
          <div className="table_header">People</div>
          <div className="table_header">Cost</div>
        
        </div>
      
      {data.map((curUser, index) => {
                    const {
                        fullName,
                        email,
                        phoneNumber,
                        duration,
                        date,
                        budget,
                        selectedFilters,
                    } = curUser;

                    return (
        <div key={index} className="table_row">
        
          <div className="table_small">
            <div className="table_cell">Full Name</div>
            <div className="table_cell">{fullName}</div>
          </div>
          <div className="table_small">
            <div className="table_cell">Email</div>
            <div className="table_cell">{email}</div>
          </div>
         

          <div className="table_small">
            <div className="table_cell">Phone Number</div>
            <div className="table_cell">{phoneNumber}</div>
          </div>
          <div className="table_small">
            <div className="table_cell">Duration</div>
            <div className="table_cell">{duration}</div>
          </div>
          <div className="table_small">
            <div className="table_cell">Date</div>
            <div className="table_cell">{new Date(date).toLocaleDateString()}</div>
          </div>
          <div className="table_small">
            <div className="table_cell">Budget</div>
            <div className="table_cell">{budget}</div>
          </div>

          <div className="table_small">
            <div className="table_cell">Countries</div>
            <div className="table_cell"> 
            <Dropdown options={selectedFilters.countries.map(i=>i.value)} placeholder="Open to see All options" />
         </div>
          </div>
          <div className="table_small">
            <div className="table_cell">Places</div>
            <div className="table_cell"> <Dropdown options={selectedFilters.places.map(i=>i.value)} placeholder="Open to see All options" /></div>
          </div>
          <div className="table_small">
            <div className="table_cell">Cost</div>
            <div className="table_cell">{selectedFilters.cost}</div>
          </div>
         
         

         
          <div className="table_small">
            <div className="table_cell">People</div>
            <div className="table_cell">{selectedFilters.people}</div>
          </div>
         
        </div>
      )})}
      </div>

    </div>



  )
}

export default Home
