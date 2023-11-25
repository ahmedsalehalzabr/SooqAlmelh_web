import { HttpContextToken } from '@angular/common/http';

export const environment = {
  production: true,
  paypalClientId: 'AfqNKvCkZ4ExY1NKEB0kwrnqpcX7JfZRC1eNr7787k8WizTyOYIwWYCxLrYry28OlLx6v41bDH1NCtA7',
  CURRENCY_CODE: 'USD',
  title: 'SooqAlmelh Web App',
  footer: 'حقوق النسخ محفوظة لـ company_name - year',
  company_id: 1,
  country_id: 1,
  homePage: 'http://SooqAlmelh.com',
  GOOGL_MAP_API_KEY: 'AIzaSyDjMjDoWsFEss0WtXbiPYkJ54QOEYWe3tY',
  GOOGLE_MAP_URL: 'https://maps.google.com/maps?q=Yemen+Mall&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed',
  // GOOGL_MAP_API_KEY: 'AIzaSyBIi0rdE611AuWwyOOX0qQRc9B0LSoh6p8',
  googleAppId: '151952423671-mnhdfadqc6rbqc9p6ajv31bknk2qlo80.apps.googleusercontent.com',
  facebookAppId: '2172400222961368',
  baseURL: '',
  apiUrl: 'https://api.sooqalmelh.app/',
  siteUrl: 'https://sooqalmelh.app',
  imgURL: 'https://api.sooqalmelh.app/Media/',
  //====== YKB Info ================
  YKB_APP_ID: '6d805f71-1b54-4a14-9c9b-39cd554c716c',
  YKB_ClientId: 'ee8c184d-5a2a-4e42-9173-a312fd6e89f0',
  //-------------------------------------

  //====== PUBG PLAYERID ================
  RapidAPIKey: 'a77fd24cc8mshfe4772f686865b3p14368bjsn4c76e5d01d6b',
  RapidAPIUrl: 'https://id-game-checker.p.rapidapi.com/PUBG-mobile/',
  //----------------------------------------------------

  //====== Social Login ================
  SocialLoginEnabled: false,
};

export const RETRY_COUNT = new HttpContextToken(() => 3);
