export interface ICampaignsProps {}

// export interface ICampaignsState {}

export interface CampaignData {
  upcomingItems: Campaign[];
  liveItems: Campaign[];
  pastItems: Campaign[];
}

export interface Campaign {
  key: number;
  name: string;
  region: string;
  createdOn: number;
  endDate: number;
  price: ProductPrice[];
  csv: string;
  report: string;
  image_url: string;
}

export interface ProductPrice {
  Duration: string;
  Price: number;
}
