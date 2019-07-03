export default (state = [], payload) => {
  switch (payload.type) {
    case "FETCH_ALL":
      return {
        ...state,
        episodes: payload.episodes
      };
    default:
      return { ...state };
  }
};
