import fetchData from '../src/fetchData'
// import postData from '../src/postData'
import { loadTestServer } from '../src/index'

const url = 'https://data.ct.gov/resource/y6p2-px98.json?category=Fruit&item=Peaches';

const dataExpected = [
  { category: 'Fruit', item: 'Peaches', location_1: { type: 'Point', coordinates: [-79.402352, 45.649393] } }
];

const server = loadTestServer(url, dataExpected);

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeAll(() => server.resetHandlers());


describe('useMockServiceWorker', () => {

  it('hook is available', () => {
    expect(loadTestServer).toBeDefined();
  });

  it('GET Data ', async () => {
    const res = await fetchData(url);
    expect(res.data[0].category).toEqual('Fruit');
    expect(res.data[0].location_1).toEqual({type: 'Point', coordinates: [-79.402352, 45.649393]});
  });

  // it('POST Data ', async () => {
  //   const formData = {
  //     userId: '69',
  //     title: 'oka',
  //     body: 'oka'
  //   }
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //   const res = await postData(url, formData, config);
  //   expect(res.data[0].category).toEqual('Fruit');
  //   expect(res.data[0].location_1).toEqual({type: 'Point', coordinates: [-79.402352, 45.649393]});
  // });

});
