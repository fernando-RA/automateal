import { Box, BoxProps } from '@chakra-ui/react';

export const Placeholder = (props: BoxProps) => {
  return <Box role="presentation" color="on-accent" {...props} />;
};
