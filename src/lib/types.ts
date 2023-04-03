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

// Used in the /mac/collection
export type Computer = {
  computer: string;
  serial: string;
  price: string;
  bought_at: string; // it should be Date =/
  hardware: string;
  photo: string;
  reference: string;
  minimum_os: string;
  current_os: string;
  maximum_os: string;
  notes?: string;
};

export type Idevice = {
  device: string;
  serial: string;
  price: string;
  bought_at: string; // it should be Date =/
  hardware: string;
  photo: string;
  reference: string;
  notes?: string;
};
