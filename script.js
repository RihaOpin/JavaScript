let numberOfFilms ;

function start() {
    numberOfFilms = +prompt('How much movies you already view?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

    }
}
start();

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



function rememberMyFilms(){
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
}
rememberMyFilms();



function detectPersonalLevel(){
    if(personalMoviesDB.count < 10){
        console.log('viewed is not too much movies');
    }else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
        console.log('you are regular viewer');
    }else if (personalMoviesDB.count >=30) {
        console.log('You are kinoman')
    }else{
        console.log('something went wrong')
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMoviesDB)
    }
}
showMyDB(personalMoviesDB.privat);

function writeYourGenres(){
    for(let i =1; i <+ 3; i++){
        const genre = prompt(`Your favorite genre under Nr ${i}`);
        personalMoviesDB.genres[i - 1] = genre;
    }
}
writeYourGenres();