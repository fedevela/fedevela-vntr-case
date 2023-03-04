import axios from 'axios';
import mockMeteomaticsData from './api.mock.json';

export interface MeteomaticsAPI {
  id: string;
  name: string;
  price: number;
}

export interface IAddressComponent {
  [key: string]: string;
}

export const exampleMeteomaticsAPI = () => mockMeteomaticsData;

export const executeRequestMeteomaticsAPI = () => {
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
      .post(
        '2023-03-03T11:05:00.000-05:00/t_min_2m_1h:C/51.5073219,-0.1276474/json?model=mix'
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      })
  );
  return [];
};
