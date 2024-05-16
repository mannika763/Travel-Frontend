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

function PopupBox({onClose,selectedFilters}) {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        duration: '',
        date: new Date(),
        budget: []
    });

    useEffect(() => {
        setFormData(prevData => ({
            ...prevData,
            selectedFilters: selectedFilters
        }));
    }, [selectedFilters]);


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data=>({
            ...data,
             [name]: value
        }))
       
        // console.log(name, value)
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post("http://localhost:8080/travel/makemytrip",formData).then((response)=>{
            console.log(response.status)
        })
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            duration: '',
            date: new Date(),
            budget: [],
            selectedFilters: {}
        });
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

                    <Form.Control className='form-control' type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange}  />

                </Form.Group>

                <Form.Group className="form-group" >
                    <PhoneInput className='form-control'
                        international
                        placeholder="Enter phone number"
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
                        placeholder="Budget per person?"
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
