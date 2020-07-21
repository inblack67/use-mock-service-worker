## use-mock-service-worker

- Don't mock fetch or axios.

- **use-mock-service-worker** is a testing hook which consumes Mock Service Worker API and takes care of all the configuration we have to do while testing ajax calls via mocking the service worker.

- **use-mock-service-worker** only plays along with **GET** requests, **one** at a time.

- Whenever we make a http request, **use-mock-service-worker** intercepts that request before it goes out to internet and then responds with whatever our API's expected response is. This way we can test Ajax calls without making an external http request.

### Installation

```sh
yarn add -D use-mock-service-worker
```

**or**

```sh
npm i -D use-mock-service-worker

```

### Usage

```js

// index.test.js

import { loadTestServer } from 'use-mock-service-worker'

// our actual Ajax call method
import fetchData from '../src/fetchData'

// target API
const url = 'https://jsonplaceholder.typicode.com/posts';

// expected response from the API
const dataExpected = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
];

// loadTestServer returns the server created my msw (mock service worker)
const server = loadTestServer(url, dataExpected);

// making sure our server starts before out tests and closes after them too
beforeAll(() => server.listen());
afterAll(() => server.close());
beforeAll(() => server.resetHandlers());


describe('useMockServiceWorker', () => {

  it('hook is available', () => {
    expect(loadTestServer).toBeDefined();
  });

  it('GET Data ', async () => {
    // making actual request via our fetchData method
    const res = await fetchData(url);
    // but the request will be intercepted by use-mocker-service-worker and won't go out in the internet world.

    // and they must pass!
    expect(res.data[0].userId).toEqual(1);
    expect(res.data[0].id).toEqual(1);
    expect(res.data[0].title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  });
});


```

### Repository

[Explore](https://github.com/inblack67/use-mock-service-worker)

### About The Author

[Website](https://inblack67.netlify.app)

[Github](https://github.com/inblack67)

