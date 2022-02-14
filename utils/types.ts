export interface PromotioProp {
  title?: string;
  description?: string;
  type?: string;
}
export interface MainCover {
  title?: string;
  properties?: Array<string>;
  author?: string;
  category?: Array<string>;
  audience?: number;
  like?: number;
}
export interface Chap {
  title: string;
  description?: string;
  fee?: number;
  last?: true | false
}
export interface Credit {
  name: string;
  credit: string;
  avatar: string;
}
export interface OtherInfo {
  last_updated: string;
  age_rate: string;
  color: string;
  origin_media: string;
  style_origin: string;
  copyright: string;
  other_names: string
}
export interface Sys {
  genres: Array<string>;
  summary: string;
  collections: Array<string>;
  credits: Credit[];
  other: OtherInfo
}
export interface Suggest {
  title: string;
  exclusive: boolean;
  type: string;
  reads: number
}
export interface Comment {
  author: string;
  content: string
}
interface Pricing {
  type?: string;
  detail?: string;
  fee?: number
}
export interface AppContextInterface {
  promotions: PromotioProp[];
  mainCover: MainCover[];
  chapter: Chap[];
  sysData: Sys;
  suggestData: Suggest[];
  onAddComment?: (values: Comment) => void;
  pricingData: Pricing[];
  onPayment?: (type: string) => void;
  onRegister?: () => void;
  onReadDemo?: () => void;
  onShare?: () => void;
}