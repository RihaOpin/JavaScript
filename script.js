const numberOfFilms = +prompt('How much movies you already view?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('One of last viewed movie?', ''),
//       b = prompt('How good it was?', ''),
//       c = prompt('One of last viewed movie?', ''),
//       d = prompt('How good it was?', '');

// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;

for(let i = 0; i < 2; i++) {
    const a = prompt('One of last viewed movie?', ''),
          b = prompt('How good it was?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) { 
    personalMoviesDB.movies[a] = b;
    console.log('done!');
    } else {
        console.log('error!');
        i--;
    }

}

if(personalMoviesDB.count < 10){
    console.log('viewed is not too much movies');
}else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
    console.log('you are regular viewer');
}else if (personalMoviesDB.count >=30) {
    console.log('You are kinoman')
}else{
    console.log('something went wrong')
}

console.log(personalMoviesDB)

