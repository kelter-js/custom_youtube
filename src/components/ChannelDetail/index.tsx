import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { useGetChannelData } from "../../hooks/useGetChannelData";
import { useGetVideosRelatedToChannel } from "../../hooks/useGetVideosRelatedToChannel";
import ChannelCard from "../ChannelCard";
import Videos from "../Videos";
import { Gradient } from "./ChannelDetail.styled";

const ChannelDetail = () => {
  const { id } = useParams();

  const channelDetail = useGetChannelData(id);

  const videos = useGetVideosRelatedToChannel(id);

  return (
    <Box minHeight="95dvh">
      <Box>
        <Gradient />
        {channelDetail && (
          <ChannelCard
            channelDetail={channelDetail}
            sx={{ marginTop: "-110px" }}
          />
        )}
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
