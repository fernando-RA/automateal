import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchResult, { ISearchResult } from './searchResult';
import { mockSearchResultProps } from './searchResult.mocks';

export default {
  title: 'utility/SearchResult',
  component: SearchResult,
  argTypes: {},
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSearchResultProps.base,
} as ISearchResult;
