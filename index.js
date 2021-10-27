console.log('hello world');

let addMovie = (event) => {
    event.preventDefault()

    let inputField = document.querySelector("input").value;

    let movie = document.createElement("li");

    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField;

    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", deleteMovie)
    
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)

    document.querySelector("input").value = '';
};

document.querySelector('form').addEventListener("submit", addMovie)

let deleteMovie = (event) => {
    event.target.parentNode.remove()
}