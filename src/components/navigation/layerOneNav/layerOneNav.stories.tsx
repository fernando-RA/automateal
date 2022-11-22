import { ComponentMeta, ComponentStory } from '@storybook/react';
import LayerOneNav, { IlayerOneNavProps } from './layerOneNav';
import { mocklayerOneNavProps } from './layerOneNav.mocks';

export default {
  title: 'templates/layerOneNav',
  component: LayerOneNav,
  argTypes: {},
} as ComponentMeta<typeof LayerOneNav>;

const Template: ComponentStory<typeof LayerOneNav> = (args) => (
  <LayerOneNav {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mocklayerOneNavProps.base,
} as IlayerOneNavProps;
