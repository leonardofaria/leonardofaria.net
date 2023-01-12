// Adapted from https://bionicjulia.com/blog/integrating-webmentions-nextjs-blog
export type WebMention = {
  id: number;
  source: string;
  verified: boolean;
  verified_date: string;
  private: boolean;
  data: {
    author?: {
      name: string;
      url: string;
      photo: string;
    };
    url: string;
    name: string;
    content: string;
    published: string;
  };
  activity: {
    type: 'link' | 'reply' | 'repost' | 'like';
    sentence: string;
    sentence_html: string;
  };
  target: string;
};
