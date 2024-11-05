import { useState, useEffect } from "react";

import { YouTubeSearchResult } from "../types";
import { API } from "../api";

export const useGetChannelData = (id?: string) => {
  const [channelDetail, setChannelDetail] =
    useState<YouTubeSearchResult | null>(null);

  useEffect(() => {
    API.getChannelData(id)
      .then((data) => {
        if (data) {
          setChannelDetail(data?.items[0]);
        }
      })
      .catch((e) => console.log(e));
  }, [id]);

  return channelDetail;
};
