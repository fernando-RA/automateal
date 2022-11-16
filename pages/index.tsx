import Image from 'next/image';
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
      <Image
        src="/hero-banner.jpeg"
        width={1920}
        height={1280}
        className={styles.hero_banner_background_image}
        alt="hero_banner"
      />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};
