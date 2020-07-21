import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const loadTestServer = (targetURL: string, expectedData: any) => {
    const server = setupServer(

        rest.get(`${targetURL}`, (req, res, context) => {
          return res(
            context.status(200),
            context.json(expectedData)
          )
        }),
      
        rest.get('*', (req, res, context) => {
          return res(
            context.status(500),
            context.json({ success: false, msg: `Please add a request handler for ${req.url.toString()}` })
          )
        })
      );
      return server;
}