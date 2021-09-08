import React, {useEffect, useState} from 'react';
import BookingFormComponent from '../components/BookingFormComponent';
import BookingResultComponent from '../components/BookingsResultComponent';

const HotelContainer = function() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkedIn, setCheckedIn] = useState(false)

    useEffect(() => {
        setCheckedIn();
        console.log(checkedIn)
    },[])
 
    const handleNameChange = function(event) {
        console.log(event.target.value)
        setName(event.target.value)
    } 

    const handleEmailChange = function(event) {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handleCheckedIn = function(event) {
        // console.log(event);
        if (checkedIn){
            setCheckedIn(false)
        } else {setCheckedIn(true)}
        console.log(`Checked in? ${event.target.value}`)

    }

    return (
        <>
        <h1>I'm the HotelContainer</h1>
        <BookingFormComponent name={name} email={email} checkedIn={checkedIn} handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} handleCheckedIn={handleCheckedIn}/>
        <BookingResultComponent/>
        </>
    )
}

export default HotelContainer