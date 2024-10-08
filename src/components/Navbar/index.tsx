import { NavbarContainer, LogoContainer } from "./Navbar.styled";
import { logo } from "../../constants";
import SearchBar from "../SearchBar";

const Navbar = () => (
  <NavbarContainer direction="row" alignItems="center">
    <LogoContainer to="/">
      <img src={logo} alt="logo" height={45} />
    </LogoContainer>

    <SearchBar />
  </NavbarContainer>
);

export default Navbar;
