import { ComponentMeta, ComponentStory } from '@storybook/react';
import Banner, { IBannerProps } from './Banner';
import { mockBannerProps } from './Banner.mocks';

export default {
  title: 'templates/Banner',
  component: Banner,
  argTypes: {},
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockBannerProps.base,
} as IBannerProps;
