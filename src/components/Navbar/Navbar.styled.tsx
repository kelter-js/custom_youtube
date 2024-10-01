import { styled, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const NavbarContainer = styled(Stack)(({ theme }) => ({
  position: "sticky",
  top: 0,
  justifyContent: "space-between",
  background: "#000",
  padding: theme.spacing(2),
}));

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;
