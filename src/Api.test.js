import MockAdapter from 'axios-mock-adapter';
import Api, { endpoint } from './Api';

let mock = new MockAdapter(endpoint);

it('loads genres', () => {
    expect.assertions(1);
    const resp = {"genres":["Comedy", "Drama", "Action"]};
    mock.onGet('/genres').reply(200, resp);

    return Api.loadGenres().then(response => expect(response.data).toEqual(resp));
});
