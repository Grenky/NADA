import contentDataStories from "./content.data.stories.js";

export const getContentData = () => {
    return Promise.all(contentDataStories.map((func) => func()));
  };