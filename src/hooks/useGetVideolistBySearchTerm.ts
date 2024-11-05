import { useEffect, useState } from "react";

import { YouTubeSearchResult } from "../types";
import { API } from "../api";

export const useGetVideolistBySearchTerm = (searchTerm?: string) => {
  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);

  useEffect(() => {
    API.getVideolistBySearchTerm(searchTerm)
      .then((data) => {
        if (data) {
          setVideos(data.items);
        }
      })
      .catch((e) => console.log(e));
  }, [searchTerm]);

  return videos;
};
