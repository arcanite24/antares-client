export type AntaresConfig = {
  firebaseConfig?: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
};

export const antaresConfig: AntaresConfig = {
  firebaseConfig: {
    apiKey: 'AIzaSyD8AIUkisQyROp6N2anoLUXrGyFE0Vb-sI',
    authDomain: 'antares-testing.firebaseapp.com',
    projectId: 'antares-testing',
    storageBucket: 'antares-testing.appspot.com',
    messagingSenderId: '911878030359',
    appId: '1:911878030359:web:88e5b3589308436d8e4852',
    measurementId: 'G-KC7EMCHCLM',
  },
};
