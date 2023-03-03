export interface MeteomaticsAPI {
  id: string;
  name: string;
  price: number;
}

export const exampleMeteomaticsAPI: MeteomaticsAPI[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
  },
];
