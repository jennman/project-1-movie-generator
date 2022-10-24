// connect index.js => index.html using script attritbute to get fetch working
const moviesUrl = 'http://localhost:3000/movies'

function getMovies () {
    fetch(moviesUrl)
    .then( res => res.json())
    .then( moviesArray => {
        moviesArray.forEach(movieObject => grabMovieImage(movieObject))
    })
}
getMovies()

function grabMovieImage (movieObject){
    const imgDiv = document.querySelector('#movie-images')
    const img = document.createElement('img')
    img.src = movieObject.image
    imgDiv.append(img)

    //add click here? 
    img.addEventListener('click', () => displayMovieInfo(movieObject))
}

function displayMovieInfo (movieObject){
    let movieInformationDivId = document.getElementById('movie-information')
    let imageDisplay = document.querySelector('#image-display')
    imageDisplay.src = movieObject.image
    movieInformationDivId.append(imageDisplay)

    const movieName = document.createElement("movie-name")
    movieName.innerContent = movieObject.name

    console.lot(movieName)

    
    
}


