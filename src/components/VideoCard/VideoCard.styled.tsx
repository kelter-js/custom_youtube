import { styled, Card, CardMedia } from "@mui/material";

export const ChannelContainer = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: 0,
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "280px",
  },

  [theme.breakpoints.up("sm")]: {
    width: "358px",
  },
}));

export const VideoMediaImage = styled(CardMedia)(({ theme }) => ({
  height: "180px",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "280px",
  },

  [theme.breakpoints.up("sm")]: {
    width: "358px",
  },
}));
