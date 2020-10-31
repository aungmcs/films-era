export const DATA_FETCHING_STARTED = "DATA_FETCHING_STARTED";
export const INITIAL_DATA_FETCHING_COMPLETED =
  "INITIAL_DATA_FETCHING_COMPLETED";
export const ERROR_OCCURED = "ERROR_OCCURED";
export const SEARCH_SUCCESSFUL = "SEARCH_SUCCESSFUL";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
export const ADD_TO_MOVIE_LIST = "ADD_TO_MOVIE_LIST";
export const REMOVE_FROM_MOVIE_LIST = "REMOVE_FROM_MOVIE_LIST";
export const CHANGE_SEARCH_WORD = "CHANGE_SEARCH_WORD";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const SET_IMDBID = "SET_IMDBID";

export const reducer = (state, action) => {
  switch (action.type) {
    case DATA_FETCHING_STARTED:
      return {
        ...state,
        loadingState: true,
      };
    case CHANGE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };
    case SET_IMDBID:
      return {
        ...state,
        movieInfo: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case INITIAL_DATA_FETCHING_COMPLETED:
      return {
        ...state,
        movieList: action.payload,
        loadingState: false,
        searchComplete: false,
      };
    case ERROR_OCCURED:
      return {
        ...state,
        errorState: true,
        loadingState: false,
        searchComplete: true,
      };
    case SEARCH_SUCCESSFUL:
      return {
        ...state,
        errorState: false,
        loadingState: false,
        searchComplete: true,
        movieList: action.payload,
      };

    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.concat(
          state.movieList.filter((movie) => movie.imdbID === action.payload)
        ),
      };

    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };

    case ADD_TO_MOVIE_LIST:
      return {
        ...state,
        movieList: state.movieList.concat(
          state.watchList.filter((movie) => movie.imdbID === action.payload)
        ),
      };

    case REMOVE_FROM_MOVIE_LIST:
      return {
        ...state,
        movieList: state.movieList.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
