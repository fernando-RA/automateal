import Link from 'next/link';
import { useRouter } from 'next/router';
import LandingPage from '../components/layouts/landingPage/LandingPage';
import { Logo } from '../components/navigation/Logo/Logo';
import Search from '../components/utility/search/search';
import styles from '../styles/home.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className={styles.section_container}>
      <Logo />
      <Search />
      <p>
        Offered in:{' '}
        <Link
          href="/"
          locale={locale === 'en' ? 'pt-br' : 'en'}
          className={styles.language_label}
        >
          Português
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};
