//alert("It is working!");

/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content.

pic - image src
 alt - the alt tag for the image
 desc - a description of the coffe
 day - the day of the week for the coffee
 color -  color assiociated with coffee
 name - the name of the coffee
*/

function coffeeTemplate(coffee) {
    let myReturn = " ";
    myReturn += `
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> 
    ${coffee.day}'s daily coffee special is <strong class="feature">
    Pumpkin Spice Latte</strong>, which makes us wish it was 
    always Fall, as this is one of our top sellers!</p>
    `;
    return myReturn;

}
let myDate = new Date();
let myDay = myDate.getDay();
let today = " ";
let coffee = " ";

//use location object to access querystring (adress bar)
const queryString = window.location.search;

//separate querystring parameters
console.log(queryString);

//
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//data on querystring, load from querystring
    myDay = urlParams.get("day");
}
//converts to integer
myDay = parseInt(myDay)
switch (myDay) {

    case 0:
        today = "Sunday";
        coffee = {
            color: "blue",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a drip",
            day: "Sunday",
            desc: `I like drip it is ny favorite!`

        };

        break;

        case 1:
        today = "Monday";

        coffee = {
            color: "grey",
            name: "pumpkin-spice-latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin-spice-latte",
            day: "Monday",
            desc: `I like some pumpkin-spice-latte!`

        };

        break;
        

    case 2:
        today = "Tuesday";

        coffee = {
            color: "green",
            name: "Cold-Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold-brew",
            day: "Tuesday",
            desc: `I like cold-brew it is ny favorite!`

        };
        break;

    case 3:
        today = "Wednesday";

        coffee = {
            color: "Pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednsday",
            desc: `I like some Bubble Tea!`

        };

        break;

        case 4:
        today = "Thursday";

        coffee = {
            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            day: "Thursday",
            desc: `I like some Bubble Tea!`

        };

        break;

        case 5:
        today = "Friday";

        coffee = {
            color: "yellow",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day: "Friday",
            desc: `I like some frappaccino!`

        };

        break;


        case 6:
        today = "Saturday";

        coffee = {
            color: "yellow",
            name: "largebucks-logo",
            pic: "images/largebucks-logo.jpg",
            alt: "A picture of a largebucks-logo",
            day: "Saturday",
            desc: `I like some largebucks-logo!`

        };

        break;

        



    default:
        today = "Something Went Wrong!";

}
//let coffeeData = coffeeTemplate(coffee);
//alert(coffeeData);

//loads coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
//console.log(coffee);




