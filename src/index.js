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
    // const imgBar = document.querySelector('#image-bar')
    const img = document.createElement('img')
    img.src = movieObject.image
    imgDiv.append(img)
    console.log(movieObject)

}



