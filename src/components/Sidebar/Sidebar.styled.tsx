import { Stack, styled } from "@mui/material";

export const CategoryButton = styled("button")`
  font-weight: bold !important;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;

  padding: 7px 15px;
  margin: 10px 0px;
  border-radius: 20px;
  transition: all 0.3s ease;
  color: white;

  @media screen and (max-width: 900px) {
    margin: 10px;
  }

  &:hover {
    background-color: #fc1503 !important;
    color: white !important;
  }

  &:hover span {
    color: white !important;
  }
`;

export const CategoriesListContainer = styled(Stack)(({ theme }) => ({
  overflowY: "auto",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    height: "95%",
    flexDirection: "column",
  },
}));

export const CategoryIcon = styled("span", {
  shouldForwardProp: (prop) => prop !== "isSelectedCategory",
})<{ isSelectedCategory?: boolean }>(({ theme, isSelectedCategory }) => ({
  color: isSelectedCategory ? "white" : "red",
  marginRight: theme.spacing(2),
}));

export const CategoryName = styled("span", {
  shouldForwardProp: (prop) => prop !== "isSelectedCategory",
})<{ isSelectedCategory?: boolean }>(({ isSelectedCategory }) => ({
  opacity: isSelectedCategory ? "1" : "0.8",
}));
