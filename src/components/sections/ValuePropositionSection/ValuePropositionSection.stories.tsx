import { ComponentMeta, ComponentStory } from '@storybook/react';
import ValuePropositionSection, {
  IValuePropositionSectionProps,
} from './ValuePropositionSection';
import { mockValuePropositionSectionProps } from './ValuePropositionSection.mocks';

export default {
  title: 'templates/ValuePropositionSection',
  component: ValuePropositionSection,
  argTypes: {},
} as ComponentMeta<typeof ValuePropositionSection>;

const Template: ComponentStory<typeof ValuePropositionSection> = (args) => (
  <ValuePropositionSection {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockValuePropositionSectionProps.base,
} as IValuePropositionSectionProps;
