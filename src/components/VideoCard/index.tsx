import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent } from "@mui/material";

import { CheckCircle } from "../Common/CheckCircle";

import {
  FALLBACK_VIDEO_URL,
  FALLBACK_VIDEO_TITLE,
  FALLBACK_CHANNEL_TITLE,
  FALLBACK_CHANNEL_URL,
} from "../../constants";
import { ChannelContainer, VideoMediaImage } from "./VideoCard.styled";
import { VideoCardProps } from "./types";

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video;

  const videoThumbnail =
    snippet?.thumbnails?.high?.url ??
    snippet?.thumbnails?.medium?.url ??
    snippet?.thumbnails?.default?.url;

  const channelLink = snippet?.channelId
    ? `/channel/${snippet?.channelId}`
    : FALLBACK_CHANNEL_URL;

  const videoLink = videoId ? `/video/${videoId}` : FALLBACK_VIDEO_URL;

  return (
    <ChannelContainer>
      <Link to={videoLink}>
        <VideoMediaImage image={videoThumbnail} />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoLink}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || FALLBACK_VIDEO_TITLE.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={channelLink}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              FALLBACK_CHANNEL_TITLE.slice(0, 60)}

            <CheckCircle />
          </Typography>
        </Link>
      </CardContent>
    </ChannelContainer>
  );
};

export default VideoCard;
