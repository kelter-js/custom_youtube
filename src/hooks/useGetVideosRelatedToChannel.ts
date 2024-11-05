import { useState, useEffect } from "react";

import { YouTubeSearchResult } from "../types";
import { API } from "../api";

export const useGetVideosRelatedToChannel = (id?: string) => {
  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);

  useEffect(() => {
    API.getVideosRelatedToChannel(id)
      .then((data) => {
        if (data) {
          setVideos(data?.items);
        }
      })
      .catch((e) => console.log(e));
  }, [id]);

  return videos;
};
