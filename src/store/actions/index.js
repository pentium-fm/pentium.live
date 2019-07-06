import {
  FETCH_EPISODES_PENDING,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_ERROR,
  FILTER_LATEST_EPISODE
} from '../constants';

export function fetchEpisodesPending() {
  return {
      type: FETCH_EPISODES_PENDING
  }
}

export function fetchEpisodesSuccess(episodes) {
  return {
      type: FETCH_EPISODES_SUCCESS,
      episodes: episodes
  }
}

export function fetchEpisodesError(error) {
  return {
      type: FETCH_EPISODES_ERROR,
      error: error
  }
}

export function filterLatestEpisode(episodes) {
  return {
    type: FILTER_LATEST_EPISODE,
    latest: episodes[0]
  }
}