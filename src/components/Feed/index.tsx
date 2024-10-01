import { useState, useEffect } from "react";
import { Typography, Stack } from "@mui/material";

import { YouTubeSearchResult } from "../../types";
import { API } from "../../api";

import {
  Copyright,
  SelectedCategoryContainer,
  SidebarContainer,
} from "./Feed.styled";
import Sidebar from "../Sidebar";
import Videos from "../Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<YouTubeSearchResult[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  useEffect(() => {
    API.getVideolistBySelectedCategory(selectedCategory)
      .then((data) => {
        if (data) {
          setVideos(data.items);
        }
      })
      .catch((e) => console.log(e));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <SidebarContainer>
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={handleChangeCategory}
        />

        <Copyright variant="body2">Copyright 2024 @kelter</Copyright>
      </SidebarContainer>

      <SelectedCategoryContainer>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </SelectedCategoryContainer>
    </Stack>
  );
};

export default Feed;
