
const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMoviesDB.count = +prompt('How many Films u allready viewed?', '')

        while(personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN
        (personalMoviesDB)){
            personalMoviesDB.count = +prompt('How many Films u allready viewed?', '')

        }
    },

    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++) {
            const a = prompt('One of last viewed movie?', '').trim(),
                  b = prompt('How good it was?', '');
    
            if(a != null && b != null && a != '' && b != '' && a.length < 50) { 
                personalMoviesDB.movies[a] = b;
                console.log('done!');
            } else {
                console.log('error!');
                i--;
            }
        }
    
    },


    detectPersonalLevel: function() {
        if(personalMoviesDB.count < 10){
            console.log('viewed is not too much movies');
        }else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
            console.log('you are regular viewer');
        }else if (personalMoviesDB.count >=30) {
            console.log('You are kinoman')
        }else{
            console.log('something went wrong')
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMoviesDB)
        }
    },

    toggleVissibleDB: function(){
        if(personalMoviesDB.privat){
            personalMoviesDB.privat = false

        }else{
            personalMoviesDB.privat = true
        }
    },
    writeYourGenres: function(){
        for(let i =1; i <+ 3; i++){
            let genre = prompt(`Your favorite genre under Nr ${i}`)
            
            if (genre === '' || genre == null) {
                console.log('wrong written data')
                i--
            }else{
                personalMoviesDB.genres[i - 1] = genre 

            }
            
        }
        personalMoviesDB.genres.forEach((item, i) =>{
            console.log(`Favorite genre ${i + 1} - it ${item}`)
        })
    }
};






