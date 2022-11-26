import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title, { ITitleProps } from './Title';
import { mockTitleProps } from './Title.mocks';

export default {
  title: 'templates/Title',
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockTitleProps.base,
} as ITitleProps;
