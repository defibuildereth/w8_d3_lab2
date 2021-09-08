import React from 'react';


const BookingFormComponent = function({handleChange, handleSubmitForm, formData}) {
    

    return (
        <>
        <h1>I'm the BookingFormComponent</h1>
        <form onSubmit={handleSubmitForm}>
            <label for='name'>Input Name: </label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required/>
            <label for= 'email'>Input Email: </label>
            <input type="text" id="name" value={formData.email} onChange={handleChange} required/>
            <label for='checkedIn'>Are you checked in? </label>
            <input type='checkbox' id='checkedIn' value={formData.checkedIn} onClick={handleChange}/>
            <input type='submit' value='Submit'/> 
        </form>
        </>
    )
}

export default BookingFormComponent