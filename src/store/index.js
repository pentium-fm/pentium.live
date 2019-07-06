import {createStore, applyMiddleware} from 'redux';
import {episodesReducer} from './reducers'
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    episodesReducer,
    applyMiddleware(thunk)
  );
}