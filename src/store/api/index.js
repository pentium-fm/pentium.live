import Disc from "../../images/pentium-logo.jpg";

import {
  fetchEpisodesPending,
  fetchEpisodesSuccess,
  fetchEpisodesError,
  filterLatestEpisode
} from '../actions'

function fetchEpisodes() {
  return (dispatch) => {
    dispatch(fetchEpisodesPending())
    // Fetch
    fetch("https://anchor.fm/s/889f12c/podcast/rss")
      .then(response => response.text())
      .then(xml => {
        let parser = new DOMParser();
        let document = parser.parseFromString(xml, "application/xml");
        // set array of items
        let episodes = Array.from(document.getElementsByTagName("item")).map(
          item => {
            return {
              guid: item.querySelector("guid").textContent,
              title: item.querySelector("title").textContent,
              description: item
                .querySelector("description")
                .textContent.replace(/(<([^>]+)>)/gi, ""),
              audio: item.querySelector("enclosure").getAttribute("url"),
              image: Disc
            };
          }
        );

        dispatch(fetchEpisodesSuccess(episodes));
        dispatch(filterLatestEpisode(episodes));
      })
      .catch(error => {
        dispatch(fetchEpisodesError(error))
      })
  }
}

export default fetchEpisodes