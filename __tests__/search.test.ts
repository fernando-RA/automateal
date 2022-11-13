import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/search';

describe('/api/search', () => {
  test('should query for cats and an object with cats detail', async () => {
    const expectedResult = [
      {
        url: 'https://en.wikipedia.org/wiki/Cat',
        title: 'This is a link to a search result about cats',
        text: 'Did you know their whiskers can sense vibrations in the air?  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result.',
      },
      {
        text: 'Both of them have tails.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result.',
        title: 'This is a link to a search result about both cats and dogs',
        url: 'https://en.wikipedia.org/wiki/Cats_%26_Dogs',
      },
    ];
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        searchTerm: 'cat',
      },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(expectedResult);
  });
  test('should query for empty and throw 400', async () => {
    const expectedResult = [];
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        searchTerm: '',
      },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual(expectedResult);
  });
  test('should query for random string and throw 200 but return empty', async () => {
    const expectedResult = [];
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        searchTerm: 'dshajkdahskdjhaskjdhaksj',
      },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(expectedResult);
  });
});
