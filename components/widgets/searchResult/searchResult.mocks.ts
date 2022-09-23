import { ISearchResult } from './searchResult';

const base: ISearchResult = {
  url: 'https://www.google.com',
  title: 'This is a link to search result about a product or service',
  text: 'The topic of this link is product or service. Description of the search result. The description is lipsum',
};

export const mockSearchResultProps = {
  base,
};
