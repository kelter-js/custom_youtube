import { styled } from "@mui/material";

export const Gradient = styled("div")`
  background: linear-gradient(
    90deg,
    var(--teal) 0%,
    var(--purple) 100%,
    var(--blue) 100%
  );
  z-index: 10;
  height: 300px;
`;
