export const BASE_MOVIE_URL = 'https://yts.mx/api/v2/list_movies.json'

export const MOVIE_FILTER_LIMIT_AND_PAGE = (page = 1) => `https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}`

export const SELECT_MOVIE_BY_ID = (id) => `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
