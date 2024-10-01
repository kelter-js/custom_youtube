import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { YouTubeSearchResult } from "../../types";
import { Gradient } from "./ChannelDetail.styled";
import { API } from "../../api";
import ChannelCard from "../ChannelCard";
import Videos from "../Videos";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] =
    useState<YouTubeSearchResult | null>(null);

  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);

  useEffect(() => {
    API.getChannelData(id)
      .then((data) => {
        if (data) {
          setChannelDetail(data?.items[0]);
        }
      })
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    API.getVideosRelatedToChannel(id)
      .then((data) => {
        if (data) {
          setVideos(data?.items);
        }
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <Box minHeight="95dvh">
      <Box>
        <Gradient />
        {channelDetail && (
          <ChannelCard
            channelDetail={channelDetail}
            sx={{ marginTop: "-110px" }}
          />
        )}
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
