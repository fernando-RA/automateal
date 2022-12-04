import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  StackDivider,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { FiMenu, FiSun, FiX } from 'react-icons/fi';
import { InsideSalesTurboLogo } from '../Logo/Logo';
import { data } from './data';

type NavLinkProps = {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
};

export const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { toggleColorMode } = useColorMode();
  const MenuIcon = isOpen ? FiX : FiMenu;
  const router = useRouter();
  return (
    <div>
      <Flex height="16" align="center" justify="space-between" px="5">
        <Link href="/">
          <InsideSalesTurboLogo />
        </Link>
        <HStack divider={<StackDivider height="6" alignSelf="unset" />}>
          <IconButton
            ref={menuButtonRef}
            variant="ghost"
            icon={<Icon as={MenuIcon} fontSize="2xl" />}
            aria-label="Open Menu"
            onClick={onOpen}
          />
        </HStack>
      </Flex>
      <Drawer
        placement="left"
        initialFocusRef={menuButtonRef}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader padding="0">
            <Flex height="16" align="center" justify="space-between" px="5">
              <InsideSalesTurboLogo />
              <HStack divider={<StackDivider height="6" alignSelf="unset" />}>
                <IconButton
                  variant="ghost"
                  icon={<Icon as={FiSun} fontSize="xl" />}
                  aria-label="Toggle color mode"
                  onClick={toggleColorMode}
                />
                <IconButton
                  ref={menuButtonRef}
                  variant="ghost"
                  icon={<Icon as={MenuIcon} fontSize="2xl" />}
                  aria-label="Open Menu"
                  onClick={onClose}
                />
              </HStack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Accordion allowMultiple as="ul" listStyleType="none">
              {data.map((group) => (
                <AccordionItem key={group.title} as="li">
                  <AccordionButton py="3" px="0">
                    <Box
                      flex="1"
                      textAlign="start"
                      fontSize="lg"
                      fontWeight="semibold"
                    >
                      {group.title}
                    </Box>
                    <AccordionIcon fontSize="3xl" />
                  </AccordionButton>
                  <AccordionPanel pb="3" px="0" pt="0">
                    {group.items.map((item, index) => (
                      <NavLink key={index} href={item.href} icon={item.icon}>
                        {item.label}
                      </NavLink>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <HStack mt="6">
              <Button
                flex="1"
                colorScheme="teal"
                variant="outline"
                color="accent"
                fontWeight="semibold"
                onClick={() => {
                  if (!router.pathname.includes('register'))
                    router.push('register');
                }}
              >
                Sign in
              </Button>
              <Button flex="1" colorScheme="teal" fontWeight="semibold">
                Start Free Trial
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const NavLink = (props: NavLinkProps) => {
  const { href, icon, children } = props;
  return (
    <Link href={href}>
      <HStack py="3" spacing="3">
        <Icon color="accent" as={icon} fontSize="xl" />
        <Text fontWeight="medium">{children}</Text>
      </HStack>
    </Link>
  );
};
