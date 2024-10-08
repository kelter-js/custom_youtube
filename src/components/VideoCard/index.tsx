import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
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
    : demoChannelUrl;

  const videoLink = videoId ? `/video/${videoId}` : demoVideoUrl;

  return (
    <ChannelContainer>
      <Link to={videoLink}>
        <VideoMediaImage image={videoThumbnail} />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoLink}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={channelLink}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}

            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </ChannelContainer>
  );
};

export default VideoCard;
