import { ComponentMeta, ComponentStory } from '@storybook/react';
import LandingPage, { ILandingPage } from './LandingPage';
import { mockLandingPageProps } from './LandingPage.mocks';

export default {
  title: 'layouts/LandingPage',
  component: LandingPage,
  argTypes: {},
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => (
  <LandingPage {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLandingPageProps.base,
} as ILandingPage;
