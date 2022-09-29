export const BASE_MOVIE_URL = 'https://yts.mx/api/v2/list_movies.json'

export const LOADED_MOVIE = (page = 1, sort) => `https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}&sort_by=${sort}`

export const SELECT_MOVIE_BY_ID = (id) => `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
