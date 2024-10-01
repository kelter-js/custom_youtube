import { Box, styled } from "@mui/material";

export const SearchFeedContainer = styled(Box)(({ theme }) => ({
  overflowY: "auto",
  height: "90vh",
  flex: 2,
  padding: theme.spacing(2),
}));
