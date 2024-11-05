import { useEffect, useState } from "react";

import { YouTubeSearchResult } from "../types";
import { API } from "../api";

export const useGetVideosSnippet = (id?: string) => {
  const [videoDetail, setVideoDetail] = useState<YouTubeSearchResult | null>(
    null
  );

  useEffect(() => {
    API.getVideosSnippet(id)
      .then((data) => {
        if (data) {
          setVideoDetail(data.items[0]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return videoDetail;
};
