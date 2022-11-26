import { ComponentMeta, ComponentStory } from '@storybook/react';
import Subtitle, { ISubtitleProps } from './Subtitle';
import { mockSubtitleProps } from './Subtitle.mocks';

export default {
  title: 'templates/Subtitle',
  component: Subtitle,
  argTypes: {},
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSubtitleProps.base,
} as ISubtitleProps;
