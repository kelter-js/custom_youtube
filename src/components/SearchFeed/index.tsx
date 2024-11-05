import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { useGetVideolistBySearchTerm } from "../../hooks/useGetVideolistBySearchTerm";
import Videos from "../Videos";
import { SearchFeedContainer, Title } from "./SearchFeed.styled";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const videos = useGetVideolistBySearchTerm(searchTerm);

  return (
    <SearchFeedContainer>
      <Typography variant="h4" fontWeight="bold" mb={2} color="white">
        Search Result for: <Title>{searchTerm}</Title> videos
      </Typography>

      <Videos videos={videos} />
    </SearchFeedContainer>
  );
};

export default SearchFeed;
