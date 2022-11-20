import { useRouter } from 'next/router';
import PrimaryButton from '../components/buttons/PrimaryButton/PrimaryButton';
import LandingPage from '../components/layouts/landingPage/LandingPage';
import { LogoBackgroundImage } from '../components/navigation/Logo/Logo';
import MainSection from '../components/sections/MainSection/MainSection';
import ValuePropositionSection from '../components/sections/ValuePropositionSection/ValuePropositionSection';
import styles from '../styles/home.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className={styles.section_container}>
      {/* <Logo /> */}
      {/* <Search /> */}
      <MainSection
        id="Hero"
        title="A Better Place To Run Your Agency"
        subtitle="Get Paid, Communicate with Clients, and Manage Projects & Tasks - All on the same platform."
        description="Attract more clients, serve them better and keep them longer."
      >
        <PrimaryButton label={'Try For Free'}></PrimaryButton>
      </MainSection>
      <MainSection
        id="all-in-one"
        title="Have all your agency operations in one place."
        subtitle="Tired of having to set up clients on multiple platforms for communication, billing, and project management (and the cost that comes with it)?"
        description="Ditch Slack, Asana, Simple Invoices - AgenciFlow does all that for you."
      >
        <LogoBackgroundImage source="/hero-banner.jpeg" />
      </MainSection>
      <MainSection
        id="client-communications"
        title="Build a branded client portal for your agency."
        subtitle="Create a branded client platform for your agency with a customizable client onboarding process, dedicated private & group chats channels as well as client specific resources sections."
      >
        <div>
          <ValuePropositionSection
            sampleTextProp={''}
          ></ValuePropositionSection>
          <LogoBackgroundImage source="/hero-banner.jpeg" />
        </div>
      </MainSection>
      <MainSection
        id="manage-projects"
        title="Manage projects & tasks."
        subtitle="Manage marketing, sales, operations, development tasks & projects in one easy-to-use platform. Share projects and tasks with clients so they can collaborate."
      >
        <div>
          <ValuePropositionSection
            sampleTextProp={''}
          ></ValuePropositionSection>
          <LogoBackgroundImage source="/hero-banner.jpeg" />
        </div>
      </MainSection>
      <MainSection
        id="send-invoices"
        title="Send Invoices & Get Paid."
        subtitle="Bill your clients directly from inside the platform. Automated recurring billing for retainers. Integrates with Stripe, PayPal and bank accounts."
      >
        <div>
          <ValuePropositionSection sampleTextProp={''} />
          <ValuePropositionSection sampleTextProp={''} />
          <LogoBackgroundImage source="/hero-banner.jpeg" />
        </div>
      </MainSection>
      {/* <ValueProposition></ValueProposition>
      <WhyBanner></WhyBanner>
      <Pricing></Pricing>
      <CtaSectionBanner template="dark" ctas={['Try For Free','Learn More']}></Section> */}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};
