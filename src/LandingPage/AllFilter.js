import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AllFilter.css";
import FilterByCountries from './Filters/FilterByCountries';
import FilterByPlaces from './Filters/FilterByPlaces';
import FilterByPeople from './Filters/FilterByPeople';
import FilterByCost from './Filters/FilterByCost';
import PopupBox from '../PopupBox';
import axios from "axios";
import Crousel from './Crousel';
import slides from './CrouselData.json'


function AllFilter() {

    const[tripcreated, setTripcreated] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    countries: [],
    places: [],
    people: [],
    cost: []
  });

  const handleFilterChange = (filterName, values) => {
    setSelectedFilters(prevState => ({
      ...prevState,
      [filterName]: values
    }));
  };

  const handleButtonClick = () => {
    setTripcreated(true);
    console.log(selectedFilters,tripcreated);
    // axios.post("http://localhost:8080/travel/makemytrip", selectedFilters).then((response) => {
    //     console.log(response.status, response.data.token);
    //   });
    
  };

  const handleClosePopup=()=>{
    setTripcreated(false);
    console.log(tripcreated);
  }

  return (
    <>
     
      <Container className='allfilter-container'>
      
        <div className='allfilter-container2'>


        <h1 className='heading1' >Crafting memorable vacations for 20 years</h1>
        <div className='heading2'>
						Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in 70+ Inspiring Destinations.
					</div>
        <Container className='allfilter-inside-container'>
          <Row className='allfilter-row'>
            <Col className='filter-col'><FilterByCountries onChange={(values) => handleFilterChange('countries', values)} /></Col>
            <Col className='filter-col'><FilterByPlaces onChange={(values) => handleFilterChange('places', values)} /></Col>
            <Col  className='filter-col'><FilterByPeople onChange={(values) => handleFilterChange('people', values)} /></Col>
            <Col className='filter-col'><FilterByCost onChange={(values) => handleFilterChange('cost', values)} /></Col>
            
                <Col  className='filter-col2'><div className="filter-button" onClick={handleButtonClick}>CREATE MY TRIP NOW</div></Col>
            
            
          </Row>
        </Container>
        </div>
        <Crousel data={slides}/>
      </Container>
     

      {tripcreated &&  <PopupBox selectedFilters={selectedFilters} onClose={handleClosePopup}/>}
    </>
  );
}

export default AllFilter;
