import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  StackDivider,
  useColorMode,
} from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { InsideSalesTurboLogo } from '../Logo/Logo';

export const DesktopNavbar = () => {
  const menuItems = ['Product', 'Pricing', 'Resources', 'Support'];
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxW="100%" py={{ base: '4', lg: '5' }}>
      <HStack spacing="10" justify="space-between">
        <Link href="/">
          <InsideSalesTurboLogo />
        </Link>
        <Flex justify="space-between" flex="1">
          <ButtonGroup variant="link" spacing="8">
            {menuItems.map((item) => (
              <Button key={item}>
                <Link href={`#${item}`}>{item}</Link>
              </Button>
            ))}
          </ButtonGroup>
          <HStack divider={<StackDivider height="6" alignSelf="unset" />}>
            <IconButton
              variant="ghost"
              icon={<Icon as={FiSun} fontSize="xl" />}
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
            />
            <Button variant="ghost">Log In</Button>
            <Button flex="1" colorScheme="teal" fontWeight="semibold">
              Start Free Trial
            </Button>
          </HStack>
        </Flex>
      </HStack>
    </Container>
  );
};
