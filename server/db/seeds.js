use hotel_hub;
db.dropDatabase();
db.bookings.insertMany([
    {
        name: "Donald Rae",
        email: "anemail@address.com",
        checkedIn: false
    },
    {
        name: "Duncan Soutter",
        email: "anotheremail@address.com",
        checkedIn: false
    },
    {
        name: "Jeremy Yoo",
        email: "aemail@address.com",
        checkedIn: true
    },
    {
        name: "Derek Bracken",
        email: "email@address.com",
        checkedIn: false
    },
]);















