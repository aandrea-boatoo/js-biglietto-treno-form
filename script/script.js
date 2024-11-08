"use strict";

// definire gli elementi html
const sectionBought = document.getElementById('boughtTicket');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const button = document.querySelector("button");
const firstNamePassenger = document.getElementById("firstNamePassenger")
const lastNamePassenger = document.getElementById("lastNamePassenger")
const kmPassenger = document.getElementById("kmPassenger")
const agePassenger = document.getElementById("agePassenger")
const pricePassenger = document.getElementById("pricePassenger")

// definire valore degli input

button.addEventListener('click', acquisto);

function acquisto (event){
    let price = 0.21;
    let firstName = inputFirstName.value;
    let lastName = inputLastName.value;
    let km = inputKm.value;
    let age = inputAge.value;
    // ticketPrice(km, price);
    event.preventDefault();
    // sectionBought.classList.remove('d-none')
    firstNamePassenger.innerHTML = `${firstName}`;
    lastNamePassenger.innerHTML = `${lastName}`;
    kmPassenger.innerHTML = `${km}`;
    agePassenger.innerHTML = `${age}`;
    pricePassenger.innerHTML = ticketPrice(km, price, age);

}





function ticketPrice(km, price, age){
    let ticketPrice = km*price
    if(age <= 17){
        ticketPrice = ticketPrice * 0.8;
    }else if(age >= 65){
        ticketPrice = ticketPrice * 0.6;
    }
    ticketPrice = ticketPrice.toFixed(2);
    return ticketPrice;
}


// console.log("il prezzo del biglietto e' di", totale, "$");