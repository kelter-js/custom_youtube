import { styled, Box, Typography } from "@mui/material";

export const SidebarContainer = styled(Box)(({ theme }) => ({
  height: "auto",
  borderRight: "1px solid #3d3d3d",
  paddingLeft: 0,
  paddingRight: 0,

  [theme.breakpoints.up("md")]: {
    height: "92dvh",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const Copyright = styled(Typography)`
  margin-top: 12px;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 800px) {
    display: none !important;
  }
`;

export const SelectedCategoryContainer = styled(Box)(({ theme }) => ({
  overflowY: "auto",
  flex: 2,
  height: "90vh",
  padding: theme.spacing(2),
}));
