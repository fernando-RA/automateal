import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import ValuePropositionSection from '../ValuePropositionSection/ValuePropositionSection';
import { trpc } from "@/utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";

export interface IMainSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

const MainSection: React.FC<IMainSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  children,
}) => {
  const color = useColorModeValue('gray.800', 'white');
  const hello = trpc.example.hello.useQuery({ text: "World From tRPC." });
  return (
    <Box id={id} as="section" bg="bg-surface">
      <Container
        maxW="960px"
        minH="-webkit-fit-content"
        paddingTop={{ base: '16', md: '24' }}
      >
        <Stack spacing={{ base: '8', md: '10' }}>
          <Stack spacing={{ base: '4', md: '5' }} align="center">
            <Heading
              as="h1"
              paddingBottom="3rem"
              textAlign="center"
              lineHeight="1.2em"
              bgGradient={`linear(to-r, ${color}, blue)`}
              bgClip="text"
              fontSize="5rem"
              fontWeight="extrabold"
            >
              {title}
            </Heading>
            <Heading
              textAlign="center"
              fontSize="2em"
              maxW="80%"
              lineHeight="1.2em"
            >
              {subtitle}
            </Heading>
            <Text
              color="muted"
              maxW="2xl"
              py="2rem"
              textAlign="center"
              fontSize="xl"
            >
              {description}
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justify="center"
          >
            <div className="flex flex-col items-center gap-2">
            <p className=" justify-center text-center text-2xl">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
            </div>
          </Stack>
          <Stack>
            <ValuePropositionSection></ValuePropositionSection>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainSection;


const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-center text-2xl text-black">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-blue-500 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
