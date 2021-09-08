import React from 'react';


const BookingFormComponent = function({name, email, checkedIn, handleNameChange, handleEmailChange, handleCheckedIn}) {
    

    return (
        <>
        <h1>I'm the BookingFormComponent</h1>
        <form>
            <label for='name'>Input Name: </label>
            <input type="text" id="name" value={name} onChange={handleNameChange} required/>
            <label for= 'email'>Input Email: </label>
            <input type="text" id="name" value={email} onChange={handleEmailChange} required/>
            <label for='checkedIn'>Are you checked in? </label>
            <input type='checkbox' id='checkedIn' value={checkedIn} onClick={handleCheckedIn}/>
        </form>
        </>
    )
}

export default BookingFormComponent