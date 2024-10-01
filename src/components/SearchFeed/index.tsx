import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { SearchFeedContainer } from "./SearchFeed.styled";
import { YouTubeSearchResult } from "../../types";
import { API } from "../../api";
import Videos from "../Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    API.getVideolistBySearchTerm(searchTerm)
      .then((data) => {
        if (data) {
          setVideos(data.items);
        }
      })
      .catch((e) => console.log(e));
  }, [searchTerm]);

  return (
    <SearchFeedContainer>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </SearchFeedContainer>
  );
};

export default SearchFeed;
