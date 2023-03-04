import axios from 'axios';
import mockMeteomaticsData from './api.mock.json';

export interface IMeteomaticsAPIDateValue {
  date: string;
  value: number;
}

export const exampleMeteomaticsAPI = () => mockMeteomaticsData;

export const executeRequestMeteomaticsAPI = (meteomaticsURL:string) => {
  const instance = axios.create({
    baseURL: 'https://api.meteomatics.com/',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    withCredentials: false,
    auth: {
      username: 'personal_vela',
      password: 'G8boayH5F6',
    },
    responseType: 'json',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = Promise.resolve(
    instance
      .post(meteomaticsURL)
      .then(function (response) {
        // handle success
        console.log(response);
        debugger;
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      })
      // .finally(function () {
      //   // always executed
      // })
  );
  return [];
};
