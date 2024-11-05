import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, Box } from "@mui/material";

import ChannelDetail from "./components/ChannelDetail";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

const App = () => {
  const theme = useMemo(() => createTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box bgcolor="var(--black)">
          <Navbar />

          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
