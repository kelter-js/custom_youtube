import { styled, Box, CardContent, CardMedia } from "@mui/material";

export const ChannelCardContainer = styled(Box)(({ theme }) => ({
  width: "356px",
  boxShadow: "none",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "326px",
  margin: "auto",

  [theme.breakpoints.up("md")]: {
    width: "320px",
  },
}));

export const CardContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-ling: center;
  color: var(--white);
`;

export const CardMediaContainer = styled(CardMedia)(({ theme }) => ({
  height: "180px",
  width: "180px",
  marginBottom: theme.spacing(2),
  borderRadius: "50%",
  border: "1px solid var(--grey)",
}));
