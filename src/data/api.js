const apiAdress =
  "https://owen-wilson-wow-api.onrender.com/wows/random?results=3";

const apiModifier = `?`; //Begin Filters
const apiAddition = `&`; //Additional Filters

let apiResultsModifier = Number;
let apiYearModifier = Number;
let apiMovieModifier = String;
let apiDirectorModifier = String;
let apiWowInMovieModifier = String;
let apiSortModifier = String;
let apiDirectionModifier = String;

const apiResults = `results=1`; //INT
const apiYear = `year=`; //INT
const apiMovie = `movie=`; //STRNG
const apiDirector = `director=`; //STRNG
const apiWowInMovie = `wow_in_movie=`; //INT
const apiSort = `sort=`; //STRNG
const apiDirection = `direction=`; //STRNG

export {
  apiAdress,
  apiModifier,
  apiAddition,
  apiResults,
  apiYear,
  apiMovie,
  apiDirector,
  apiWowInMovie,
  apiSort,
  apiDirection,
  apiResultsModifier,
  apiYearModifier,
  apiMovieModifier,
  apiDirectorModifier,
  apiWowInMovieModifier,
  apiSortModifier,
  apiDirectionModifier,
};
