import LandingPage from '@/components/layouts/landingPage/LandingPage';
import { InsideSalesTurboLogo as Logo } from '@/components/navigation/Logo/Logo';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaDiscord, FaFacebook, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const Register = ({ providers }) => {
  const [emailValue, setEmailValue] = useState('');
  const [loadingEmailButton, setLoadingEmailButton] = useState(false);
  const [emailLinkSentWithSuccess, setEmailLinkSentWithSuccess] =
    useState(false);

  const color = useColorModeValue('gray.800', 'gray.200');
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const { error } = useRouter().query;

  const handleEmailMagicalLink = async () => {
    setLoadingEmailButton(true);
    await signIn('email', {
      email: emailValue,
      redirect: false,
      callbackUrl: '/dashboard',
    })
      .then((res) => {
        setLoadingEmailButton(false);
        setEmailLinkSentWithSuccess(true);
      })
      .catch((err) => {
        console.error('err', err);
      });
  };
  return (
    <Container
      maxW="xl"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Flex>
        <Stack>{error && <SignInError error={error} />}</Stack>
      </Flex>
      <Box
        py={{ base: '12', sm: '6' }}
        px={{ base: '4', sm: '10' }}
        bg={bgColor}
        color={color}
        boxShadow={{ sm: useColorModeValue('xl', 'gray.100') }}
        borderRadius={{ base: 'md', sm: 'xl' }}
      >
        <Stack spacing="12">
          <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <HStack spacing="1" justify="center">
                <Text color="muted">Access your account</Text>
              </HStack>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="6">
              <Stack spacing="4">
                <Input
                  placeholder="Enter your email"
                  onChange={(event) => setEmailValue(event.target.value)}
                />
                <Button
                  onClick={handleEmailMagicalLink}
                  variant="outline"
                  isLoading={loadingEmailButton}
                >
                  Send a magical link
                </Button>
                {emailLinkSentWithSuccess && !error ? (
                  <div className="mt-4 flex bg-green-200">
                    Check your inbox for a magic link
                  </div>
                ) : (
                  <div></div>
                )}
              </Stack>
              <HStack>
                <Divider />
                <Text fontSize="sm" color="muted">
                  OR
                </Text>
                <Divider />
              </HStack>
              <Stack spacing="3">
                <Button
                  colorScheme={useColorModeValue('blue', 'blue')}
                  leftIcon={<FaGoogle />}
                  iconSpacing="3"
                  onClick={() => {
                    signIn('google');
                  }}
                >
                  Continue with Google
                </Button>
                <Button
                  colorScheme="facebook"
                  leftIcon={<FaFacebook />}
                  iconSpacing="3"
                  onClick={() => {
                    signIn('facebook');
                  }}
                >
                  Continue with Facebook
                </Button>
                <Button
                  colorScheme="linkedin"
                  leftIcon={<FaLinkedinIn />}
                  iconSpacing="3"
                  onClick={() => {
                    signIn('linkedin');
                  }}
                >
                  Continue with Linkedin
                </Button>
                <Button
                  colorScheme="purple"
                  leftIcon={<FaDiscord />}
                  iconSpacing="3"
                  onClick={() => {
                    signIn('discord');
                  }}
                >
                  Continue with Discord
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Register;

Register.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

const errors = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
};

const SignInError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return <div>{errorMessage}</div>;
};
