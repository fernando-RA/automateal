import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroSection, { IMainSectionProps } from './MainSection';
import { mockMainSectionProps } from './MainSection.mocks';

export default {
  title: 'templates/HeroSection',
  component: HeroSection,
  argTypes: {},
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (args) => (
  <HeroSection {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainSectionProps.base,
} as IMainSectionProps;
