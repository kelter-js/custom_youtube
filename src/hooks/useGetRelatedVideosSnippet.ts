import { useEffect, useState } from "react";

import { API } from "../api";
import { YouTubeSearchResult } from "../types";

export const useGetRelatedVideosSnippet = (id?: string) => {
  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);

  useEffect(() => {
    API.getRelatedVideosSnippet(id)
      .then((data) => {
        if (data) {
          setVideos(data.items);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return videos;
};
