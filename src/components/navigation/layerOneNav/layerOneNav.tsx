import { Box, Container, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './layerOneNav.module.scss';
export interface IlayerOneNavProps {
  title?: string;
  cta?: string;
}

const LayerOneNav: React.FC<IlayerOneNavProps> = ({ title, cta }) => {
  const router = useRouter();
  const isSubscribePage = Boolean(router.pathname.includes('subscribe'));

  if (!isSubscribePage) {
    (title = 'O Inside Sales Turbo ja está disponivel!'),
      (cta = '✨Assine Agora!✨');
  } else {
    title = '';
    cta = '🏠';
  }
  return (
    <Box as="section" className={styles.colored_background}>
      <Link href={isSubscribePage ? '/' : 'subscribe'}>
        <Box bg="bg-accent" color="on-accent" position="initial">
          <Container py={{ base: '4', md: '3.5' }}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              spacing={{ base: '0.5', md: '1.5' }}
              pe={{ base: '4', sm: '0' }}
              textAlign="center"
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
