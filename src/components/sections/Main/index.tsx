import { Container, Flex, FlexProps } from '@chakra-ui/react';
import { Placeholder } from '../../../utility/Placeholder';

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props}>
      <Container p="0" maxW="100%" flex="1">
        <Placeholder minH="lg" bg="bg-accent">
          {props.children}
        </Placeholder>
      </Container>
    </Flex>
  );
};
