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
const movies = [
    {
    "title": "Arrival",
    "poster": "https://media.posterlounge.com/img/products/660000/651583/651583_poster.jpg",
    "rating": 94,
    "releaseDate": new Date(2016,9,2)
    },
    {
    "title": "2001: A Space Odyssey",
    "poster": "https://i.ebayimg.com/images/g/gbkAAOSwHP5ebNKR/s-l1600.jpg",
    "rating": 92,
    "releaseDate": new Date(1968,4,2)
    },
    {
    "title": "Megamind",
    "poster": "https://digitalmoviedeals.nbcuniversal.com/cdn/shop/files/0fa342e3-605a-4b5d-b4c3-c52d4d30efcb_808fda86-882d-476e-941d-c8ae245dfcae.jpg?v=1710170912",
    "rating": 73,
    "releaseDate": new Date(2010,10,30)
    },
    {
    "title": "Blade Runner 2049",
    "poster": "https://m.media-amazon.com/images/I/61WfeCSu6JL._AC_UF894,1000_QL80_.jpg",
    "rating": 88,
    "releaseDate": new Date(2017,10,6)
    },
    {
    "title": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/71dN1QYnf+L._AC_UF894,1000_QL80_.jpg",
    "rating": 73,
    "releaseDate": new Date(2014,10,26)
    },
    {
    "title": "Alien",
    "poster": "https://i.etsystatic.com/23402008/r/il/d58671/2996343001/il_570xN.2996343001_aomg.jpg",
    "rating": 93,
    "releaseDate": new Date(1979,5,25)
    },
    {
    "title": "Dune: Part One",
    "poster": "https://m.media-amazon.com/images/I/61QbqeCVm0L.jpg",
    "rating": 83,
    "releaseDate": new Date(2021,10,22)
    },
    {
    "title": "Dune: Part Two",
    "poster": "https://m.media-amazon.com/images/I/51ZM+aTI7rL._AC_UF894,1000_QL80_.jpg",
    "rating": 93,
    "releaseDate": new Date(2024,3,1)
    },
    {
    "title": "Ender's Game",
    "poster": "https://m.media-amazon.com/images/I/61KLKWEUEgL._AC_UF894,1000_QL80_.jpg",
    "rating": 62,
    "releaseDate": new Date(2013,11,1)
    },
    {
    "title": "The Matrix",
    "poster": "https://i.ebayimg.com/images/g/zwAAAOSwCGVX5wN4/s-l1200.jpg",
    "rating": 83,
    "releaseDate": new Date(1999,3,31)
    }
];


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    movies.map((movie)=>{
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, movie.title, movie.poster, movie.rating, movie.releaseDate); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    })

}

function showMovie(movie){
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, movie.title, movie.poster, movie.rating, movie.releaseDate); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("searchForm").addEventListener("submit", function(event){
        event.preventDefault();
    
        const searchInput = document.getElementById("searchInput");
        const searchQuery = searchInput.value;
        
        movies.map((movie)=>{
            if (searchQuery == movie.title){
                showMovie(movie);
            }
        }) 
    });
});


function editCardContent(card, newTitle, newImageURL, rating, date) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const cardRating = card.querySelector(".rating");
    cardRating.textContent = (rating + "% Rotten Tomatoes");

    const cardDate = card.querySelector(".date");
    cardDate.textContent = formatDate(date);

    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);




function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    movies.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function sortByName(){
    movies.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else {
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
