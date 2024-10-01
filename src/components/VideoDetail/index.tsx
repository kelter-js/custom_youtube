import { useState, useEffect } from "react";
import { Typography, Box, Stack, Skeleton } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import {
  ChannelContainer,
  PlayerContainer,
  VideoPlayer,
} from "./VideoDetail.styed";
import { YouTubeSearchResult } from "../../types";
import { API } from "../../api";
import Videos from "../Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<YouTubeSearchResult | null>(
    null
  );
  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);
  const { id } = useParams();

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

  if (!videoDetail?.snippet) {
    return (
      <Skeleton animation="wave" sx={{ minHeight: "95vh", width: "100%" }} />
    );
  }

  const { snippet, statistics } = videoDetail || {};
  const { title, channelId, channelTitle } = snippet || {};
  const { viewCount, likeCount } = statistics || {};

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <PlayerContainer>
            <VideoPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            <ChannelContainer>
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                {viewCount && (
                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.7 }}
                    color="white"
                  >
                    {parseInt(String(viewCount)).toLocaleString()} views
                  </Typography>
                )}

                {likeCount && (
                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.7 }}
                    color="white"
                  >
                    {parseInt(String(likeCount)).toLocaleString()} likes
                  </Typography>
                )}
              </Stack>
            </ChannelContainer>
          </PlayerContainer>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} sx={{ flexDirection: "column" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
