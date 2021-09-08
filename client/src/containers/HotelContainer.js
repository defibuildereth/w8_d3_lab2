import React, {useEffect, useState} from 'react';
import BookingFormComponent from '../components/BookingFormComponent';
import BookingResultComponent from '../components/BookingsResultComponent';
import BookingService from '../services/BookingService';

const HotelContainer = function() {
    const [formData, setFormData] = useState({})

    const handleChange = function(event) {
        formData[event.target.id] = event.target.value
        console.log(event)
    }

    const handleSubmitForm = function(event) {
        console.log(event.target.value);
    }

    return (
        <>
        <h1>I'm the HotelContainer</h1>
        <BookingFormComponent handleChange={handleChange} handleSubmitForm={handleSubmitForm} formData={formData}/>
        <BookingResultComponent/>
        </>
    )
}

export default HotelContainer