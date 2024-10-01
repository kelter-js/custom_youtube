import { FC } from "react";
import { Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../../utils/constants";

import { ChannelCardProps } from "./types";
import {
  CardContainer,
  ChannelCardContainer,
  CardMediaContainer,
} from "./ChannelCard.styled";

const ChannelCard: FC<ChannelCardProps> = ({ channelDetail, sx }) => (
  <ChannelCardContainer sx={{ ...sx }}>
    <Link to={`/channel/${channelDetail?.id ?? channelDetail?.id?.channelId}`}>
      <CardContainer>
        <CardMediaContainer
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
        />

        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </CardContainer>
    </Link>
  </ChannelCardContainer>
);

export default ChannelCard;
