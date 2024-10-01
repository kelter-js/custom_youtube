import { styled, Stack } from "@mui/material";

export const VideosContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(2),
}));
