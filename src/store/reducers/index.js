import {
  FETCH_EPISODES_PENDING,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_ERROR,
  FILTER_LATEST_EPISODE,
  CURRENT_PLAYING_EPISODE
} from '../constants';

const initState = {
  latest: {},
  episodes: [],
  current: {},
  pending: false,
  error: null
}

export function episodesReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_EPISODES_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        pending: false,
        episodes: action.episodes
      }
    case FETCH_EPISODES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case FILTER_LATEST_EPISODE:
      return {
        ...state,
        latest: action.latest
      }
    case CURRENT_PLAYING_EPISODE:
      return {
        ...state,
        current: action.current
      }
    default:
      return state;
  }
}

export const getEpisodes = state => state.episodes;
export const getEpisodesPending = state => state.pending;
export const getEpisodesError = state => state.error;
export const getLatestEpisode = state => state.latest;
export const getCurrentEpisode = state => state.current;