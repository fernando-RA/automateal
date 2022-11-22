import { ComponentMeta, ComponentStory } from '@storybook/react';
import Search, { ISearchProps } from './search';
import { mockSearchProps } from './search.mocks';

export default {
  title: 'utility/Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSearchProps.base,
} as ISearchProps;
