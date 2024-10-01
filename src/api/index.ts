import type { AxiosRequestHeaders } from "axios";
import axios from "axios";

import { YouTubeSearchListResponse } from "../types";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const MAX_RESULTS_LENGTH = "50";

const options = {
  url: BASE_URL,
  params: { maxResults: MAX_RESULTS_LENGTH },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  } as AxiosRequestHeaders,
};

export const API = {
  async search(url: string) {
    const { data } = await axios.get<YouTubeSearchListResponse>(
      `${BASE_URL}/${url}`,
      options
    );

    return data;
  },

  async getVideosSnippet(id?: string) {
    if (id) {
      return await this.search(`videos?part=snippet,statistics&id=${id}`);
    }
  },

  async getRelatedVideosSnippet(id?: string) {
    if (id) {
      return await this.search(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
    }
  },

  async getVideolistBySearchTerm(searchTerm?: string) {
    if (searchTerm) {
      return await this.search(`search?part=snippet&q=${searchTerm}`);
    }
  },

  async getVideolistBySelectedCategory(selectedCategory?: string) {
    if (selectedCategory) {
      return await this.search(`search?part=snippet&q=${selectedCategory}`);
    }
  },

  async getChannelData(id?: string) {
    if (id) {
      return await this.search(`channels?part=snippet&id=${id}`);
    }
  },

  async getVideosRelatedToChannel(id?: string) {
    if (id) {
      return await this.search(
        `search?channelId=${id}&part=snippet&order=date&`
      );
    }
  },
};
