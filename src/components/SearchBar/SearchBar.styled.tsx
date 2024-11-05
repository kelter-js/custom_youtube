import { styled, Paper, IconButton } from "@mui/material";

export const NavbarContainer = styled(Paper)(({ theme }) => ({
  borderRadius: 20,
  border: "1px solid var(--grey)",
  paddingLeft: 2,
  boxShadow: "none",

  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(5),
  },
}));

export const SearchButton = styled(IconButton)`
  padding: 10px;
  color: var(--red);
`;

export const Input = styled("input")`
  border: none;
  outline: none;
  width: 350px;

  @media screen and (max-width: 600px) {
    width: 200px;
  }
`;
