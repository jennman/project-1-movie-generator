// connect index.js => index.html using script attritbute to get fetch working
const moviesUrl = 'http://localhost:3000/movies'
const btn = document.querySelector('#random-button')
let movieInformationDivId = document.getElementById('movie-information')
let likesNumber = document.getElementById('show-the-likes')
const likeButton = document.getElementById('like-button')


function getRandomMovie(moviesArray) {
    btn.addEventListener('click', () => {
        const randomMovie = moviesArray[Math.floor(Math.random() * moviesArray.length)]
        displayMovieInfo(randomMovie)
        // console.log(randomMovie)
    })
}

function getMovies () {
    fetch(moviesUrl)
    .then( res => res.json())
    .then( moviesArray => {
        iterateMoviesArray(moviesArray)
        getRandomMovie(moviesArray)
        displayMovieInfo(moviesArray[0])
    })
}
getMovies()

function iterateMoviesArray(moviesArray){
    moviesArray.forEach(movieObject => grabMovieImage(movieObject))
}

function grabMovieImage (movieObject){
    const imgDiv = document.querySelector('#movie-images')
    const img = document.createElement('img')
    img.src = movieObject.image
    imgDiv.append(img)

    //add click here? 
    img.addEventListener('mouseover', () => displayMovieInfo(movieObject))
    // img.addEventListener('mouseout', () => mouseOutImage(movieObject))
}




function displayMovieInfo (movieObject){
    let imageDisplay = document.querySelector('#image-display')
    imageDisplay.src = movieObject.image
    movieInformationDivId.append(imageDisplay)

    // const movieName = document.querySelector('#name-display')
    const h2 = document.querySelector('#name-year')
    h2.textContent = `${movieObject.name} ${movieObject.year}`
    movieInformationDivId.append(h2)

    const description = document.querySelector('#description-display')
    description.textContent = movieObject.description
    movieInformationDivId.append(description)
    likesNumber.textContent = movieObject.likes
    //number and button were flipped, we want numbers to show when highlighted, not text content. kimber 
    likesNumber.append(likeButton)







}

 const submitForm = document.getElementById("review-form")
 console.log(submitForm)

submitForm.addEventListener("submit", (eventObject) => {
    eventObject.preventDefault();

console.log("clicked")
const userTextinput = eventObject.target.review.value;
console.log(userTextinput)

const liReview = document.createElement("li")
liReview.textContent= userTextinput
console.log(liReview)

const reviewList = document.getElementById("review-list")
console.log(reviewList)

reviewList.append(liReview)

})





// //displayMovieInfo(movieObject)
// likeButton.addEventListener('click', (event) => 
// {
//     event.target.style.color = '#000000'
//     likesNumber.innerText = `${.likes} 'likes'`
//     // parseInt(movieObject.likes++)
//     // const letCount = Number(event.likeButton.innerText) +1 
//     // event.likeButton.innerText = letCount
// }
    


// )
