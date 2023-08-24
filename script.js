const numberOfFilms = prompt('How much movies you already view?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of last viewed movie?', ''),
      b = prompt('How good it was?', ''),
      c = prompt('One of last viewed movie?', ''),
      d = prompt('How good it was?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB)


