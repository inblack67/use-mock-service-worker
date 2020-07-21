// import { useMockServiceWorker } from '../src';
import fetchRoutes from '../src/fetchRoutes'
import '../src'

const url = 'https://data.ct.gov/resource/y6p2-px98.json?category=Fruit&item=Peaches';

const dataExpected = [
  { category: 'Fruit', item: 'Peaches', location_1: { type: 'Point', coordinates: [-79.402352, 45.649393] } }
];

describe('useMockServiceWorker', () => {

  // it('hook is available', () => {
  //   expect(useMockServiceWorker).toBeDefined();
  // });

  it('hook does its job', async () => {
    const res = await fetchRoutes(url);
    expect(res.data[0].category).toEqual('Fruit');
    expect(res.data[0].location_1).toEqual({type: 'Point', coordinates: [-79.402352, 45.649393]});
  });

});
