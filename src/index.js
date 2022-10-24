// connect index.js => index.html using script attritbute to get fetch working
const moviesUrl = 'http://localhost:3000/movies'

function getMovies () {
fetch(moviesUrl)
.then( res => res.json())
.then( moviesArray => {
    moviesArray.forEach(movieObject => {
    const imgNav = document.querySelector('#image-list')
    const imgBar = document.querySelector('#image-bar')
    imgBar.src = movieObject.image
    imgNav.append(imgBar)
    console.log(imgBar)

    })
})


}
getMovies()

