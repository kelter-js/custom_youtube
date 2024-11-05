import {
  TheaterComedy,
  FitnessCenter,
  LiveTv,
  School,
  FaceRetouchingNatural,
  Checkroom,
  GraphicEq,
  SportsEsports,
  OndemandVideo,
  Code,
  Home,
  MusicNote,
} from "@mui/icons-material";

export const FALLBACK_CHANNEL_URL = "/channel/UC_pPmy6BQq-SQnek6gnxAiA";
export const FALLBACK_VIDEO_URL = "/watch?v=dQw4w9WgXcQ";
export const FALLBACK_CHANNEL_TITLE = "Template channel title";
export const FALLBACK_VIDEO_TITLE = "Template title";
export const FALLBACK_PROFILE_PICTURE =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
  { name: "New", icon: <Home /> },
  { name: "Coding", icon: <Code /> },
  { name: "Music", icon: <MusicNote /> },
  { name: "Education", icon: <School /> },
  { name: "Podcast", icon: <GraphicEq /> },
  { name: "Movie", icon: <OndemandVideo /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Sport", icon: <FitnessCenter /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Gym", icon: <FitnessCenter /> },
];
