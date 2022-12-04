import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  StackDivider,
  useColorMode,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FiSun } from 'react-icons/fi';
import { InsideSalesTurboLogo } from '../Logo/Logo';

export const DesktopNavbar = () => {
  const menuItems = ['Product', 'Pricing', 'Resources', 'Support'];
  const { toggleColorMode } = useColorMode();
  const { data: sessionData } = useSession();

  return (
    <Container maxW="100%" py={{ base: '4', lg: '5' }}>
      <HStack spacing="10" justify="space-between">
        <Link href="/">
          <InsideSalesTurboLogo />
        </Link>
        <Flex justify="space-between" flex="1">
          <ButtonGroup marginTop="12px" variant="link" spacing="8">
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
            {sessionData ? (
              <div>
                <span>Logged in as {sessionData.user?.email}</span>
                <button
                  onClick={() => {
                    signOut();
                  }}
                >
                  SignOut
                </button>
              </div>
            ) : (
              <Link href="/register">
                <Button variant="ghost">Log In</Button>
                <Button flex="1" colorScheme="teal" fontWeight="semibold">
                  Start Free Trial
                </Button>
              </Link>
            )}
          </HStack>
        </Flex>
      </HStack>
    </Container>
  );
};
