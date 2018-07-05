import {generateActionCreator, generateExecutabeleAction} from './fabrics';

export const LOAD_MOVIES = 'LOAD_MOVIES';


export const loadMovies = generateActionCreator(LOAD_MOVIES);
export const loadMoviesAction = generateExecutabeleAction(LOAD_MOVIES);
