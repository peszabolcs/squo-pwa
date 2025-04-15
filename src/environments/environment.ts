declare global {
  interface Window {
    env: {
      GOOGLE_MAPS_API_KEY: string;
    };
  }
}

export const environment = {
  production: false,
  googleMapsApiKey: 'AIzaSyBORdG09UW2ywRx0vjCbupXvIF4kwhCdoY',
};
