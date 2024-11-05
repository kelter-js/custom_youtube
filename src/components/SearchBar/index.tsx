import { useState, FormEventHandler, ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

import * as S from "./SearchBar.styled";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchTerm(e.target.value);

  return (
    <S.NavbarContainer>
      <form onSubmit={handleSubmit}>
        <S.Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <S.SearchButton type="submit">
          <Search />
        </S.SearchButton>
      </form>
    </S.NavbarContainer>
  );
};

export default SearchBar;
