import axios from 'axios';
import mockMeteomaticsData from './api.mock.json';

export interface IKeyValueMap {
  [key: string]: string;
}
export interface IGroupedValuesMap {
  [key: string]: number[];
}

export interface IMeteomaticsAPIDateValue {
  date: string;
  value: number;
}

export interface IGraphDataPoint {
  year: number;
  month: number;
  date: number;
  hour: number;
  value: number;
  ymdLabel?: string;
  hLabel?: string;
}

export const array24HLabels = () => {
  return new Array(24).fill(0).map((_, i) => `${i}h`);
};

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
