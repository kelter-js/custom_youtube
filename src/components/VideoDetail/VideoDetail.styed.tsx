import { styled, Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";

export const PlayerContainer = styled(Box)`
  position: sticky;
  top: 86px;
  width: 100%;
`;

export const ChannelContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  color: "var(--white)",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

export const VideoPlayer = styled(ReactPlayer)`
  height: 77vh !important;
  width: 100% !important;

  @media screen and (max-width: 600px) {
    height: 45vh !important;
  }
`;
