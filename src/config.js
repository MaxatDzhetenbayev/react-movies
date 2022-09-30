export const BASE_MOVIE_URL = 'https://yts.mx/api/v2/list_movies.json'

export const LOADED_MOVIE = (page = 1, sort = 'download_count') => `https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}&sort_by=${sort}`

export const QUERY_MOVIES = (query) => `https://yts.mx/api/v2/list_movies.json?query_term=${query}`

export const SELECT_MOVIE_BY_ID = (id) => `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
