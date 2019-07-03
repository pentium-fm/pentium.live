import Disc from "../images/pentium-logo.jpg";

export const getAllEpisodes = () => {
  return dispatch => {
    fetch("https://anchor.fm/s/889f12c/podcast/rss")
      .then(response => response.text())
      .then(xml => {
        let parser = new DOMParser();
        let document = parser.parseFromString(xml, "application/xml");
        // set array of items
        let items = Array.from(document.getElementsByTagName("item")).map(
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

        dispatch(fetchEpisodes(items));
      });
  };
};

export const fetchEpisodes = items => {
  return {
    type: "FETCH_ALL",
    episodes: items
  };
};
