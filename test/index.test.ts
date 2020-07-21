import fetchData from '../src/fetchData'
import { loadTestServer } from '../src/index'

const url = 'https://jsonplaceholder.typicode.com/posts';

const dataExpected = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
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
    expect(res.data[0].userId).toEqual(1);
    expect(res.data[0].id).toEqual(1);
    expect(res.data[0].title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  });
});
