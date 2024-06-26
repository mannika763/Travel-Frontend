import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './PopupBox.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { Container } from 'react-bootstrap';
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function PopupBox({onClose,selectedFilters}) {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        duration: '',
        date: new Date(),
        budget: ''
    });

    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    useEffect(() => {
        setFormData(prevData => ({
            ...prevData,
            selectedFilters: selectedFilters
        }));
    }, [selectedFilters]);


    const options =  [
        { value: "1000$ - 2000$",label: "1000$ - 2000$" },
        { value: "1500$ - 2500$" ,label: "1500$ - 2500$" },
        { value: "2000$ - 3000$" ,label: "2000$ - 3000$" },
        { value: "2500$ - 3500$", label: "2500$ - 3500$" },
        { value: "3000$ - 4000$" ,label: "3000$ - 4000$" },
        { value: "3500$ - 4500$", label: "3500$ - 4500$" },
        { value: "4000$ - 5000$" ,label: "4000$ - 5000$" },
        { value: "4500$ - 5500$" ,label: "4500$ - 5500$" },
        { value: "5000$ - 6000$" ,label: "5000$ - 6000$" },
        { value: "5500$ - 6500$" ,label: "5500$ - 6500$" }
  
        ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data=>({
            ...data,
             [name]: value
        }))
        if(name==="email"){
            validateEmail(value)
        }
     
        
        // console.log(name, value)
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setEmailError(true);
        } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            // console.log("fffffffff")
            setEmailError(true);
        } else {
            setEmailError(false);
        }
      };

      const validateNumber = (num) => {
        if (!num || num.replace(/\D/g, '').length < 10) {
            console.log(num)
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        validateEmail(formData.email);
        validateNumber(formData.phoneNumber)
    if ((!emailError && formData.email) && (formData.phoneNumber && !phoneError) ) {
      // Submit form
      console.log('Form submitted', formData);
   
        axios.post("https://travel-backend-avx0.onrender.com/travel/makemytrip",formData).then((response)=>{
            // console.log(response.status)
        })
        Swal.fire({
            title: "Thank You!",
            text: "Thank you for inquiring about your trip of a lifetime with us. Our team of experts will be in touch soon to help craft the perfect vacation for you.",
            icon: "success"
          });
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            duration: '',
            date: new Date(),
            budget: [],
            selectedFilters: {}
        });
    }
    else{
        console.log("Form not submitted",formData);
    }
    };

    const handleBudgetChange = (value) => {
        setFormData(data=>({
            ...data,
            budget: value
        }))
        // console.log(value)
    }

    const handleDateChange = (value) => {
        setFormData(data=>({
            ...data,
            date: value
        }))
        // console.log(value)
    }

   

    const handlePhoneChange = (value) => {
        setFormData(data=>({
            ...data,
            phoneNumber: value
        }))
      
            validateNumber(value)
        
        // console.log(value)
    }

    function handleCloseClick(){
        onClose();
    }

    return (


      <div className='popup'>  
      <div className="close-button" onClick={handleCloseClick}>
      <span>&times;</span>
  </div>
        <Container className='popup-container'>
            <h1 style={{ textAlign: "center" }}>Almost There!</h1>
            <div className='below-heading'>We need a bit more info to create your intinerary</div>
            <Form className="popup-form" >
                <Form.Group className="form-group" controlId="formBasicName">

                    <Form.Control className='form-control' type="name" placeholder="Full Name" name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}  />
                </Form.Group>

                <Form.Group className="form-group" controlId="formBasicEmail">

                    <Form.Control className={`form-control ${emailError ? 'is-invalid' : ''}`} 
                     type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}  />

                </Form.Group>

                <Form.Group className="form-group" >
                    <PhoneInput  className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                        international
                        defaultCountry="IN"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}  />
                </Form.Group>

                <div className="range">
                    <Form.Group className="form-group" >

                        <Form.Control className='form-control-range'
              type="text"
              placeholder="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}  />
                    </Form.Group>
                    <Form.Group className="form-group" >
                        <DatePicker className='form-control-range' name="date"
                            value={formData.date}
                            onChange={handleDateChange}  />
                    </Form.Group>

                </div>

                <Form.Group className="form-group" >

                    <Select
                        multi
                        options={options}
                        placeholder="Budget Per Person?"
                        name="budget"
                        value={formData.budget}
                        onChange={handleBudgetChange}
                    />
               
                </Form.Group>

                <Form.Group className="form-group" onClick={handleSubmit}>

                    <div className='popup-btn'>Get My Quote</div>
                </Form.Group>

            </Form>
        </Container>
        </div>
    );
}

export default PopupBox;
