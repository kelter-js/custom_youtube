interface StatisticsData {
  subscriberCount?: string;
  viewCount?: number;
  likeCount?: number;
}

interface PageInfoData {
  totalResults: number;
  resultsPerPage: number;
}

interface VideoIdData {
  kind: string;
  videoId?: string;
  channelId?: string;
}

interface ThumbnailsData {
  default: {
    url: string;
    width: number;
    height: number;
  };
  medium: {
    url: string;
    width: number;
    height: number;
  };
  high: {
    url: string;
    width: number;
    height: number;
  };
}

interface SnippetData {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsData;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YouTubeSearchResult {
  kind: string;
  id: VideoIdData;
  snippet: SnippetData;
  statistics?: StatisticsData;
}

export interface YouTubeSearchListResponse {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfoData;
  items: YouTubeSearchResult[];
}
