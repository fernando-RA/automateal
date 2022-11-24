import { Box, Container, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './layerOneNav.module.scss';
export interface IlayerOneNavProps {
  title?: string;
  cta?: string;
}

const LayerOneNav: React.FC<IlayerOneNavProps> = ({
  title = 'O Inside Sales Turbo ja está disponivel!',
  cta = '✨Assine Agora!✨',
}) => {
  const router = useRouter();
  const handleL1NavClick = (): void => {
    router.pathname.includes('/subscribe')
      ? router.push('/')
      : router.push('/subscribe');
  };

  useEffect(() => {}, [router.pathname]);

  return (
    <Box
      as="section"
      onClick={handleL1NavClick}
      className={styles.colored_background}
    >
      <Link>
        <Box bg="bg-accent" color="on-accent" position="initial">
          <Container py={{ base: '4', md: '3.5' }}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              spacing={{ base: '0.5', md: '1.5' }}
              pe={{ base: '4', sm: '0' }}
            >
              <Text fontWeight="medium">{title}</Text>
              <Text color="on-accent-muted">{cta}</Text>
            </Stack>
          </Container>
        </Box>
      </Link>
    </Box>
  );
};
export default LayerOneNav;
