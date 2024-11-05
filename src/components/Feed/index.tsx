import { useState } from "react";
import { Typography, Stack } from "@mui/material";

import { useGetVideolistBySelectedCategory } from "../../hooks/useGetVideolistBySelectedCategory";
import Sidebar from "../Sidebar";
import Videos from "../Videos";
import {
  Copyright,
  SelectedCategoryContainer,
  SidebarContainer,
} from "./Feed.styled";
import { Title } from "../SearchFeed/SearchFeed.styled";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const handleChangeCategory = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  const videos = useGetVideolistBySelectedCategory(selectedCategory);

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
        <Typography variant="h4" fontWeight="bold" mb={2} color="white">
          {selectedCategory} <Title>videos</Title>
        </Typography>

        <Videos videos={videos} />
      </SelectedCategoryContainer>
    </Stack>
  );
};

export default Feed;
