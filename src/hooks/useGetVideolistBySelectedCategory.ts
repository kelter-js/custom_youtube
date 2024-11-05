import { useEffect, useState } from "react";

import { YouTubeSearchResult } from "../types";
import { API } from "../api";

export const useGetVideolistBySelectedCategory = (category: string) => {
  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);

  useEffect(() => {
    API.getVideolistBySelectedCategory(category)
      .then((data) => {
        if (data) {
          setVideos(data.items);
        }
      })
      .catch((e) => console.log(e));
  }, [category]);

  return videos;
};
