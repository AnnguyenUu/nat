export const PROMOTION = [
  {
    title: 'Total Price',
    description: 'Instant access to all chapters • No Ad',
    type: 'price',
  },
  {
    title: 'Save money with INKR Extra',
    description: 'Instant access to all chapters • No Ad • Extra saving',
    type: 'extra'
  },
];
export const MAIN_COVER = [
  {
    title: 'Kasane',
    properties: ['18+', 'NEW', 'TRENDING', 'BESTSELLER', 'MANGA'],
    author: 'Kodansha',
    category: ['Drama', '10 Chapters'],
    audience: 74_450,
    like: 15863,
  },
];
export const LAST_READ = [
  {
    title: 'Chapter 1',
    fee: 0,
    description: 'Last read 2 day ago',
  }
]
export const CHAP_DATA = [
  {
    title: 'Chapter 1',
    fee: 0,
    description: 'Last read 2 day ago',
    last: true,
  },
  {
    title: 'Chapter 2',
    fee: 0,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 3',
    fee: 0,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 4',
    fee: 5,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 5',
    fee: 5,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 6',
    fee: 5,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 7',
    fee: 5,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 8',
    fee: 5,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 9',
    fee: 5,
    description: '',
    last: false,
  },
  {
    title: 'Chapter 10',
    fee: 5,
    description: '',
    last: false,
  },
];
export const SYS_DATA = {
  genres: ['Horror', 'Psychological', 'Seinen'],
  summary: `Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.`,
  collections:[
  '/kasane_1.png',
  '/kasane_2.png',
  '/kasane_3.png',
  '/kasane_4.png',
  '/kasane_4.png'],
  credits: [
    { name: 'Kodansha', credit: 'publisher', avatar: '/publisher.png' },
    { name: 'Johnnie Christmas', credit: 'story', avatar: '/story.png' },
    { name: 'Jack T. Cole', credit: 'art', avatar: '/art.png' },
  ],
  other: {
    last_updated: '2 day ago',
    age_rate: '18+',
    color: 'Black & White',
    origin_media: 'Print',
    style_origin: 'Japanese Comics (Manga)',
    copyright: '© Daruma Matsuura / Kodansha Ltd.',
    other_names: 'Kasane -voleuse de visage' 
  }
}
export const OTHER_INFO = {
  last_updated: 'Last Updated',
  age_rate: 'Age Rating',
  color: 'Color',
  origin_media: 'Origin Media',
  style_origin: 'Style Origin',
  copyright: 'Copyright',
  other_names: 'Other Names' 
}
export const SUGGEST_DATA = [
  { title: 'Title Name 1', exclusive: true, type: 'PREQUEL', reads: 4600 },
  { title: 'Title Name 2', exclusive: true, type: 'PREQUEL', reads: 4600 },
  { title: 'Title Name 3', exclusive: true, type: 'PREQUEL', reads: 4600 }]
export const SHORT_CUT_CURRENCY = {
  Bilion: { limit: 999_999_999, k: 1_000_000_000 },
  Milion: { limit: 999_999, k: 1_000_000 },
  Thousand: { limit: 999, k: 1_000 },
};
export const PRICING_DATA = [
  { type: 'Free', detail: '3 chapters', fee: 0 },
  { type: 'Locked', detail: '7 chapters', fee: 5 },
];
export const QRCONTENT = [
  {
    title: 'Get The App',
    image: '/qrcode.png',
    content:
      'Love this title? Scan the QR code to continue reading right on your mobile devices.',
  },
];