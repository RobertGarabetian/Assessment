/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */
// import movies from './data.js'

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.
const originalMovies = [
    {
    "title": "Arrival",
    "poster": "https://media.posterlounge.com/img/products/660000/651583/651583_poster.jpg",
    "rating": 94,
    "releaseDate": new Date(2016,9,2),
    "director": "Denis Villeneuve"
    },
    {
    "title": "2001: A Space Odyssey",
    "poster": "https://i.ebayimg.com/images/g/gbkAAOSwHP5ebNKR/s-l1600.jpg",
    "rating": 92,
    "releaseDate": new Date(1968,4,2),
    "director": "Stanley Kubrick"
    },
    {
    "title": "Megamind",
    "poster": "https://digitalmoviedeals.nbcuniversal.com/cdn/shop/files/0fa342e3-605a-4b5d-b4c3-c52d4d30efcb_808fda86-882d-476e-941d-c8ae245dfcae.jpg?v=1710170912",
    "rating": 73,
    "releaseDate": new Date(2010,10,30),
    "director": "Tom McGrath"
    },
    {
    "title": "Blade Runner 2049",
    "poster": "https://m.media-amazon.com/images/I/61WfeCSu6JL._AC_UF894,1000_QL80_.jpg",
    "rating": 88,
    "releaseDate": new Date(2017,10,6),
    "director": "Denis Villeneuve"
    },
    {
    "title": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/71dN1QYnf+L._AC_UF894,1000_QL80_.jpg",
    "rating": 73,
    "releaseDate": new Date(2014,10,26),
    "director": "Christopher Nolan"
    },
    {
    "title": "Alien",
    "poster": "https://i.etsystatic.com/23402008/r/il/d58671/2996343001/il_570xN.2996343001_aomg.jpg",
    "rating": 93,
    "releaseDate": new Date(1979,5,25),
    "director":"Ridley Scott"
    },
    {
    "title": "Dune: Part One",
    "poster": "https://m.media-amazon.com/images/I/61QbqeCVm0L.jpg",
    "rating": 83,
    "releaseDate": new Date(2021,10,22),
    "director": "Denis Villeneuve"
    },
    {
    "title": "Dune: Part Two",
    "poster": "https://m.media-amazon.com/images/I/51ZM+aTI7rL._AC_UF894,1000_QL80_.jpg",
    "rating": 93,
    "releaseDate": new Date(2024,3,1),
    "director": "Denis Villeneuve"
    },
    {
    "title": "Ender's Game",
    "poster": "https://m.media-amazon.com/images/I/61KLKWEUEgL._AC_UF894,1000_QL80_.jpg",
    "rating": 62,
    "releaseDate": new Date(2013,11,1),
    "director": "Gavin Hood"
    },
    {
    "title": "The Matrix",
    "poster": "https://i.ebayimg.com/images/g/zwAAAOSwCGVX5wN4/s-l1200.jpg",
    "rating": 83,
    "releaseDate": new Date(1999,3,31),
    "director": "Lana Wachowski & Lily Wachowski"
    }
];

const facts = [
    "The Black Hole In 'Interstellar' Is So Accurate, It Spawned Numerous Academic Papers.",
    "The Matrix' code represents Japanese sushi recipes.",
    "Megamind has the same head to body proportion as a toddler, or a Lego minifigure.",
    "Stanley Kubrick won his only Oscar for 2001: A Space Odyssey.",
    "For Dune: Part Two, Stellan Skarsg\u00E5rd body makeup took 8 hours to apply and 2 hours to remove for every day of shooting."
];

let movies = originalMovies.slice();
// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    movies.map((movie)=>{
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, movie.title, movie.poster, movie.rating, movie.releaseDate, movie.director); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    })
}

function editCardContent(card, newTitle, newImageURL, rating, date, director) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const cardRating = card.querySelector(".rating");
    cardRating.textContent = (rating + "%");

    const cardDirector = card.querySelector(".director");
    cardDirector.textContent = director

    const cardDate = card.querySelector(".date");
    cardDate.textContent = formatDate(date);

    console.log("new card:", newTitle, "- html: ", card);
}


function factAlert() {
    let randomNumber = Math.floor(Math.random() * 5)
    alert(facts[randomNumber])
}

function removeLastCard() {
    movies.pop(); 
    showCards(); 
}

function sortByName(){
    movies.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } 
        else if (a.title > b.title) {
            return 1;
        } 
        else {
            return 0;
        }
    });
    showCards();
}

function sortByDate(){
    movies.sort((a, b) => b.releaseDate - a.releaseDate);
    showCards();
}

function sortByRating(){
    movies.sort((a, b) => b.rating - a.rating);
    showCards();
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

function openForm() {
    document.getElementById("contentAdd").style.display = "block";
}

function closeForm(){
    document.getElementById("searchFormAdd").reset();
    document.getElementById("contentAdd").style.display = "none";
}

function arrayReset(){
    movies = originalMovies;
    showCards();
}



document.addEventListener("DOMContentLoaded", ()=>{

    showCards();

    document.getElementById("searchFormAdd").addEventListener("submit", function(e){
        e.preventDefault();

        const inputTitle = document.getElementById("inputTitle");
        const inputRating = document.getElementById("inputRating");
        const inputIMG= document.getElementById("inputIMG");
        const inputDirector = document.getElementById("inputDirector");
        const inputDate = document.getElementById("inputDate");

 
        movies.push({
            "title": inputTitle.value,
            "poster": inputIMG.value,
            "rating": inputRating.value,
            "releaseDate": new Date(inputDate.value),
            "director": inputDirector.value
        })
        showCards();
        closeForm();
    });


    document.getElementById("searchForm").addEventListener("submit", function(event){
        event.preventDefault();
    
        const searchInput = document.getElementById("searchInput");
        const searchQuery = searchInput.value;
        
        movies = movies.filter((movie)=>{
            if (searchQuery == movie.title){
                return movie
            }
        })
        showCards();
    });
});
