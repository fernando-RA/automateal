import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ILogoProps, Logo } from './Logo';
import { mockLogoProps } from './Logo.mocks';

export default {
  title: 'templates/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockLogoProps.base,
} as ILogoProps;
