import { FC } from "react";
import { Typography } from "@mui/material";

import { Link } from "react-router-dom";

import { FALLBACK_PROFILE_PICTURE } from "../../constants";
import { CheckCircle } from "../Common/CheckCircle";

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
            channelDetail?.snippet?.thumbnails?.high?.url ||
            FALLBACK_PROFILE_PICTURE
          }
        />

        <Typography variant="h6">
          {channelDetail?.snippet?.title} <CheckCircle />
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
