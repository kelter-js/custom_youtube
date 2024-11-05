import { FC, useMemo, Fragment } from "react";
import { Box, Skeleton } from "@mui/material";

import { VideosContainer } from "./Videos.styled";
import { VideosProps } from "./types";
import VideoCard from "../VideoCard";
import ChannelCard from "../ChannelCard";

const Videos: FC<VideosProps> = ({ videos, sx = {} }) => {
  if (!videos?.length) {
    return <Skeleton animation="wave" height="100%" width="100%" />;
  }

  const videosList = useMemo(
    () =>
      videos.map((video, ind) => (
        <Fragment
          key={
            video.id.videoId ??
            video?.snippet?.channelId ??
            video?.statistics?.subscriberCount
          }
        >
          {video.id.videoId && (
            <Box key={ind}>
              <VideoCard video={video} />
              {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
          )}
        </Fragment>
      )),
    [videos]
  );

  return <VideosContainer sx={{ ...sx }}>{videosList}</VideosContainer>;
};

export default Videos;
