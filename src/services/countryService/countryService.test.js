import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getCountryService } from './countryService';

const response = {
    test: 'test'
};

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response))
    })
);

beforeAll( () => server.listen());
afterEach( () => server.resetHandlers());
afterAll( () => server.close());

test('transform json response into object', async () => {
    const country = await getCountryService();

    expect(country).toStrictEqual(response.test);
});