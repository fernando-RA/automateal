import { Logo } from '@/components/navigation/Logo/Logo';
import {
  As,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  chakra,
  Container,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
} from 'react-icons/fi';

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
}

interface ToggleButtonProps extends IconButtonProps {
  isOpen: boolean;
}

interface UserProfileProps {
  name: string;
  image: string;
  email: string;
}

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Container maxW="100%" py={{ base: '3', lg: '4' }}>
        <Flex justify="space-between">
          <HStack spacing="16">
            <Logo />
            {isDesktop && (
              <Tabs defaultIndex={0} size="lg" colorScheme="teal">
                <TabList>
                  <Tab>Dashboard</Tab>
                  <Tab>Chat</Tab>
                  <Tab>Flows e Clientes</Tab>
                  <Tab>Tarefas</Tab>
                  <Tab>Relatórios</Tab>
                  <Tab>Quadros</Tab>
                </TabList>
              </Tabs>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup variant="ghost" spacing="1">
                <IconButton
                  icon={<FiSearch fontSize="1.25rem" />}
                  aria-label="Search"
                />
                <IconButton
                  icon={<FiSettings fontSize="1.25rem" />}
                  aria-label="Settings"
                />
                <IconButton
                  icon={<FiHelpCircle fontSize="1.25rem" />}
                  aria-label="Help Center"
                />
              </ButtonGroup>
              <Avatar
                boxSize="10"
                name="Christoph Winston"
                src="https://tinyurl.com/yhkm2ek8"
              />
            </HStack>
          ) : (
            <>
              <ToggleButton
                isOpen={isOpen}
                aria-label="Open Menu"
                onClick={onToggle}
              />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap
                // Only disabled for showcase
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, ...buttonProps } = props;
  return (
    <Button variant="ghost" justifyContent="start" {...buttonProps}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="muted" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Stack spacing="1">
            <NavButton label="Home" icon={FiHome} />
            <NavButton
              label="Dashboard"
              icon={FiBarChart2}
              aria-current="page"
            />
            <NavButton label="Tasks" icon={FiCheckSquare} />
            <NavButton label="Bookmarks" icon={FiBookmark} />
            <NavButton label="Users" icon={FiUsers} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <NavButton label="Help" icon={FiHelpCircle} />
            <NavButton label="Settings" icon={FiSettings} />
          </Stack>
          <Divider />
          <UserProfile
            name="Christoph Winston"
            image="https://tinyurl.com/yhkm2ek8"
            email="chris@chakra-ui.com"
          />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);

const Bar = chakra('span', {
  baseStyle: {
    display: 'block',
    pos: 'absolute',
    w: '1.25rem',
    h: '0.125rem',
    rounded: 'full',
    bg: 'currentcolor',
    mx: 'auto',
    insetStart: '0.125rem',
    transition: 'all 0.12s',
  },
});

const ToggleIcon = (props: { active: boolean }) => {
  const { active } = props;
  return (
    <Box
      className="group"
      data-active={active ? '' : undefined}
      as="span"
      display="block"
      w="1.5rem"
      h="1.5rem"
      pos="relative"
      aria-hidden
      pointerEvents="none"
    >
      <Bar
        top="0.4375rem"
        _groupActive={{ top: '0.6875rem', transform: 'rotate(45deg)' }}
      />
      <Bar
        bottom="0.4375rem"
        _groupActive={{ bottom: '0.6875rem', transform: 'rotate(-45deg)' }}
      />
    </Box>
  );
};

export const ToggleButton = (props: ToggleButtonProps) => {
  const { isOpen, ...iconButtonProps } = props;
  return (
    <IconButton
      position="relative"
      variant="unstyled"
      size="sm"
      color={isOpen ? 'white' : 'muted'}
      zIndex="skipLink"
      icon={<ToggleIcon active={isOpen} />}
      {...iconButtonProps}
    />
  );
};

export const UserProfile = (props: UserProfileProps) => {
  const { name, image, email } = props;
  return (
    <HStack spacing="3" ps="2">
      <Avatar name={name} src={image} boxSize="10" />
      <Box>
        <Text fontWeight="medium" fontSize="sm">
          {name}
        </Text>
        <Text color="muted" fontSize="sm">
          {email}
        </Text>
      </Box>
    </HStack>
  );
};
