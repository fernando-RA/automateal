import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { InsideSalesTurboLogo } from '../Logo/Logo';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const menuItems = ['Product', 'Pricing', 'Resources', 'Support'];
  const color = useColorModeValue('white', 'gray.800');
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      as="section"
      maxW="100%"
      position={'sticky'}
      top="0"
      display={'block'}
      backgroundColor={color}
      zIndex={999}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container maxW="100%" py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <InsideSalesTurboLogo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {menuItems.map((item) => (
                    <Button key={item}>
                      <Link href={`#${item}`}>{item}</Link>
                    </Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={toggleColorMode}
                  >
                    <FaMoon />
                  </Button>
                  <Button variant="ghost">Log In</Button>
                  <Button colorScheme="blue">Start Free Trial</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
