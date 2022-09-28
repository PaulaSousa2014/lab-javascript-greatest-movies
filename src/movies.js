// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
        const directorsArray = moviesArray.map((el) => el.director);
        const eliminarDuplicados = directorsArray.filter((valor, indice) => {
            return directorsArray.indexOf(valor) === indice;
          })
    return eliminarDuplicados
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesStevenS = moviesArray.filter((movie)=>{
        if (movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')) return true
        else return false 
    })

    return moviesStevenS.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length == 0){
    return 0
}
const moviesScore = moviesArray.map((movie) => movie.score);

const scoreSum =  moviesScore.reduce((a, b) => {
   if (b){ return a + b 
}else{ return a}
}) 
const averageScore = scoreSum / moviesArray.length;
return parseFloat(averageScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let dup_moviesArray = moviesArray.slice();
   dup_moviesArray.sort((a, b) => {
            if (a.year === b.year) {
            
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                if(a.title === b.title) return 0;
            }
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        
        return 0;
    })
     return dup_moviesArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //duplicamos la array
    let dup_moviesArray = moviesArray.slice();
    //seleccionamos solo los titulos de la array
    const moviesTitle = dup_moviesArray.map((movie) => movie.title);
    //ordenamos la array de titulos por orden alfabatico
    moviesTitle.sort((a, b) => {
         if (a === b)  return 0;
         if (a > b) return 1;
         if (a < b) return -1;
         
         return 0;
     })
     //cortamos la array en los 20 promeros elementos
     const slicedArray = moviesTitle.slice(0, 20);
      return slicedArray 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
