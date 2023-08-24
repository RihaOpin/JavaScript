const numberOfFilms = prompt('How much movies you already done?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of last viewed movie?', ''),
      b = prompt('How good it was?', ''),
      c = prompt('One of last viewed movie?', ''),
      d = prompt('How good it was?', '')

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)