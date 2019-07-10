import {
  setCurrentPlaying
} from '../actions'

export function setCurrentEpisode(audio) {
  return (dispatch) => {
    dispatch(setCurrentPlaying(audio));
  }
}