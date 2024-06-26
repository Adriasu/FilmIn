import { movies } from "./data.js";

// Iteration 1: All directors? - Get the array of all directors.

// const getAllDirectors = (array) => {
//   const allDirectors = array.map((directors) => {
//     return directors.director;
//   });
//   return allDirectors;
// };

// const allDirectors = getAllDirectors(movies);
// console.log(allDirectors);

// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// // How could you "clean" a bit this array and make it unified (without duplicates)?

// const directorsNotRepeated = allDirectors.reduce((acc, director) => {
//   if (!acc.includes(director)) {
//     acc.push(director);
//   }
//   return acc;
// }, []);

// console.log(directorsNotRepeated);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(array) {
//   const dramaStevenSpielbergMovies = array.filter((directordrama) => {
//     return (
//       directordrama.director.toLowerCase() === "steven spielberg" &&
//       directordrama.genre.includes("Drama")
//     );
//   });
//   return dramaStevenSpielbergMovies
// }

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// function scoresAverage(array) {
//   const averageSum = array.reduce((acc, prom) => {
//     return acc + prom.score;
//   }, 0);
//   let average = averageSum / array.length;
//   return average.toFixed(2);
// }
// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

// function dramaMoviesScore(array) {
//   const dramaMovies = array.filter((genreDrama) => {
//     return genreDrama.genre.includes("Drama");
//   });
//   const averageDramaSum = dramaMovies.reduce((acc, prom) => {
//     return acc + prom.score;
//   }, 0);
//   let averageDrama = (averageDramaSum / dramaMovies.length).toFixed(2);
//   return `El promedio de las peliculas de drama es ${averageDrama}`;
// }

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// const copyOfMovies = [].concat(movies);
// function orderByYear(array) {
//   array.sort((a, b) => {
//     if (a.year < b.year) return -1;
//     if (a.year > b.year) return 1;
//     else {
//       if (a.title < b.title) return -1;
//       if (a.title > b.title) return 1;
//       return 0;
//     }
//   });
//   return array;
// }
// console.log(orderByYear(copyOfMovies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// const copyOfMoviesTwo = [].concat(movies);

// function orderAlphabetically(array) {
//   array.sort(function (a, b) {
//     if (a.title < b.title) return -1;
//     if (a.title > b.title) return 1;
//     return 0;
//   });
//   const firstTenMovies = array.slice(0, 10);
//   const firstTenNamesMovies = firstTenMovies.map((name) => {
//     return name.title;
//   });
//   return firstTenNamesMovies
// }

// console.log(orderAlphabetically(copyOfMoviesTwo));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes(array) {
//   array.forEach((time) => {
//     return time.duration = parseInt((time.duration.charAt((time.duration.indexOf('h')-1))*60)) +
//     parseInt(time.duration.slice(time.duration.indexOf('m')-2, time.duration.indexOf('m')))
//   })
//   return array
// }
// console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

// function bestYearAvg(array) {
//   const yearsAvarage = array.reduce((acc, movie) => {
//     acc[movie.year] = acc[movie.year] || { sumScore: 0, count: 0 };
//     acc[movie.year].sumScore += movie.score;
//     acc[movie.year].count++;
//     return acc;
//   }, {});
//   const result = Object.keys(yearsAvarage).map((year) => ({
//     year,
//     avarageScore: (yearsAvarage[year].sumScore / yearsAvarage[year].count).toFixed(2),
//   }));
//   result.sort((a,b) => {
//     if (a.avarageScore < b.avarageScore) return 1
//     if (a.avarageScore > b.avarageScore) return -1
//     return 0
//   })
//   return `El mejor año fue ${result[0].year} con una puntuación media de ${result[0].avarageScore}.`
// }
// console.log(bestYearAvg(movies));
