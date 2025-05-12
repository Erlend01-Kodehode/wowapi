const apiAdress = "https://owen-wilson-wow-api.onrender.com/wows/random";

const apiModifier = `?`; //Begin Filters
const apiAddition = `&`; //Additional Filters

const apiResults = `results=${apiResultsModifier}`; //INT
const apiYear = `year=${apiYearModifier}`; //INT
const apiMovie = `movie=${apiMovieModifier}`; //STRNG
const apiDirector = `director=${apiDirectorModifier}`; //STRNG
const apiWowInMovie = `wow_in_movie=${apiWowInMovieModifier}`; //INT
const apiSort = `sort=${apiSortModifier}`; //STRNG
const apiDirection = `direction=${apiDirectionModifier}`; //STRNG

let apiResultsModifier = Number;
let apiYearModifier = Number;
let apiMovieModifier = String;
let apiDirectorModifier = String;
let apiWowInMovieModifier = String;
let apiSortModifier = String;
let apiDirectionModifier = String;

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
