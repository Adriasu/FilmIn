import { movies } from "./data.js";

// Iteration 1: All directors? - Get the array of all directors. // Iteración 1: ¿Todos los directores? - Obtener el array de todos los directores.

// const getAllDirectors = (array) => {
//   const allDirectors = array.map((directors) => {
//      return directors.director;
//   });
//   return allDirectors;
// }
// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(array) {
//   const dramaStevenSpielbergMovies = array.filter((directordrama) => {
//     return (
//       directordrama.director.toLowerCase() === "steven spielberg" &&
//       directordrama.genre.includes("Drama") === true
//     );
//   });
//   return dramaStevenSpielbergMovies
// }

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(array) {
  const averageSum = array.reduce((acc, prom) => {
    return acc + prom.score;
  }, 0);
  let average = averageSum / array.length;
  return average.toFixed(2);
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
