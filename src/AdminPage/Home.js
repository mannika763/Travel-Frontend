import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Pagination from './Pagination';
import { BarChart, PieChart , Pie , Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Chart from "react-apexcharts"
import Search from './Search';

function Home() {

    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [pieChartData , setPieChartData] = useState();
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLogged, setIsLogged]= useState(false);

    useEffect(() => {
        // Define an async function to fetch data
        
        const fetchData = async () => {
            try {
                // Make the API request
                const response = await axios.get('https://travel-backend-avx0.onrender.com/admin/dashboard');
               console.log("Response",response.data)
                setData(response.data);
                setFilteredData(response.data);
                setChartData(countDateOccurrences(response.data))
                setPieChartData(countMonthOccurrences(response.data))
                // console.log("Data formated" , countDateOccurrences(response.data))
                // console.log("Month formated" , countMonthOccurrences(response.data))

                setCurrentPage(1);
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


    const handleSearch = (searchTerm) => {
      if (!searchTerm) {
        setFilteredData(data);
      } else {
        console.log("ssssssssssss", searchTerm)
        const searchWords = searchTerm.toLowerCase().split(" ");
    const filtered = data.filter(item => {
      const fullName = item.fullName.toLowerCase();
      return searchWords.every(word => fullName.includes(word));
    });
        setFilteredData(filtered);
      }
      setCurrentPage(1); // Reset to first page after search
    };



    function formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}/${month}/${day}`;
    }
    
    function countDateOccurrences(arr) {
      const dateCounts = {};
    
      arr.forEach(obj => {
        const formattedDate = formatDate(obj.date);
        if (dateCounts[formattedDate]) {
          dateCounts[formattedDate]++;
        } else {
          dateCounts[formattedDate] = 1;
        }
      });
    
      // Convert the dateCounts object into an array of objects
      const result = Object.keys(dateCounts).map(date => ({
        date: date,
        count: dateCounts[date]
      }));
    
      return result;
    }

    // Month occurance for pie chart 
    function formatMonth(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = date.getMonth(); // Months are zero-based
    
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
    
      return {
        monthYear: `${monthNames[month]} ${year}`,
        year: year,
        month: month
      };
    }
    
    function countMonthOccurrences(arr) {
      const monthCounts = {};
    
      arr.forEach(obj => {
        const { monthYear, year, month } = formatMonth(obj.date);
        if (monthCounts[monthYear]) {
          monthCounts[monthYear].count++;
        } else {
          monthCounts[monthYear] = { count: 1, year: year, month: month };
        }
      });
    
      // Convert the monthCounts object into an array of objects and sort it
      const sortedMonthCounts = Object.keys(monthCounts)
        .map(monthYear => ({
          monthYear: monthYear,
          count: monthCounts[monthYear].count,
          year: monthCounts[monthYear].year,
          month: monthCounts[monthYear].month
        }))
        .sort((a, b) => a.year - b.year || a.month - b.month);
    
      // Create separate arrays for months and counts
      const months = sortedMonthCounts.map(item => item.monthYear);
      const counts = sortedMonthCounts.map(item => item.count);
    
      return { months, counts };
    }


    if (loading) {
        return <div style={{height: "60vh"}}>Hold On. We are fetching data for you</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < numbers.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };    

  return (


    <div className='parent'>
 <div className='table-and-page'>
  <div className='table-heading2'>
 <div className='table-heading'>Explore All Queries: A Comprehensive Data Overview</div>
 <Search onSearch={handleSearch}/></div>
        <div className="table" id="results">
       
        <div className="theader">
          <div className="table_header">Full Name</div>

          <div className="table_header">Email</div>
          <div className="table_header">Phone</div>{" "}
          <div className="table_header">Duration</div>
          <div className="table_header">Date</div>
          <div className="table_header">Countries</div>
          <div className="table_header">Places</div>
          <div className="table_header">Cost</div>
          <div className="table_header">People</div>
        
        </div>
      
      {records.map((curUser, index) => {
                    const {
                        fullName,
                        email,
                        phoneNumber,
                        duration,
                        date,
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
            <div className="table_cell">Countries</div>
            <div className="table_cell"> 
            <Dropdown options={selectedFilters.countries.map(i=>i.value)} placeholder="All Countries" />
         </div>
          </div>
          <div className="table_small">
            <div className="table_cell">Places</div>
            <div className="table_cell"> <Dropdown options={selectedFilters.places.map(i=>i.value)} placeholder="All Places" /></div>
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
      <div className='pagination'>
<Pagination   currentPage={currentPage}
                    totalPages={npage}
                    prePage={prePage}
                    nextPage={nextPage}
                    changePage={changePage}/></div>
    </div>

      <div className='chart-child'>
       <div className='bar-chart'>
        <h1 className='barchart-heading'># of Users within the last 15 days</h1>
        <BarChart
          width={450}
          height={250}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="count"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill=" #ADD8E6" activeBar={<Rectangle fill="#7393B3" stroke="#0047AB" />} />
        </BarChart>
       </div> 
       <div className='pie-chart'>
        <Chart 
         type='pie'
         width={450}
         height={240}
         series={pieChartData.counts}
         options={{
          title : {
            text : "% of Users per month"
          },
          noData : {text : "...loading"},
          labels : pieChartData.months
         }}
        >
        </Chart>
       </div>
       </div>
      
    </div>
  )
}

export default Home