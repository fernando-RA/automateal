import LandingPage from '../../components/layouts/landingPage/LandingPage';
import DetailsSection from '../../components/sections/DetailsSection';
import { FeatureSection } from '../../components/sections/FeatureSection';
import MainSection from '../../components/sections/MainSection/MainSection';
import { OutroSection } from '../../components/sections/OutroSection';
import { PricingSection } from '../../components/sections/PricingSection';
import ValuePropositionSection from '../../components/sections/ValuePropositionSection/ValuePropositionSection';
import { NextPageWithLayout } from '../page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <MainSection
          id="Hero"
          title="A Better Place To Run Your Inside Sales"
          subtitle="Get Paid, Communicate with Clients, and Manage Projects & Tasks - All on the same platform."
          description="Attract more clients, serve them better and keep them longer."
        ></MainSection>
        <DetailsSection
          id="Why"
          title="Have all your agency operations in one place."
          subtitle="Tired of having to set up clients on multiple platforms for communication, billing, and project management (and the cost that comes with it)?"
          description="Ditch Slack, Asana, Simple Invoices - AgenciFlow does all that for you."
          imgUrl="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/617c3930e2b00230e5ac7bf2_agency-management-software-poster-00001.jpg"
          imgOrientation="right"
        ></DetailsSection>
        <DetailsSection
          id="Pricing"
          title="Build a branded client portal for your agency."
          subtitle="Create a branded client platform for your agency with a customizable client onboarding process, dedicated private & group chats channels as well as client specific resources sections."
          imgUrl="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/624b32af2639614cfeda4845_6146286d6f14045d0373a86b_project-management2.png"
          imgOrientation="left"
        >
          <div>
            <ValuePropositionSection></ValuePropositionSection>
          </div>
        </DetailsSection>
        <DetailsSection
          id="manage-projects"
          title="Manage projects & tasks."
          subtitle="Manage marketing, sales, operations, development tasks & projects in one easy-to-use platform. Share projects and tasks with clients so they can collaborate."
          imgUrl="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/624b3459617460e8fdeba736_6146286d6f14045d0373a86b_project-management3.png"
          imgOrientation="right"
        >
          <div>
            <ValuePropositionSection></ValuePropositionSection>
          </div>
        </DetailsSection>
        <DetailsSection
          id="send-invoices"
          title="Send Invoices & Get Paid."
          subtitle="Bill your clients directly from inside the platform. Automated recurring billing for retainers. Integrates with Stripe, PayPal and bank accounts."
          imgUrl="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/6146286cf8cc779671fcf460_client-invoices.svg"
          imgOrientation="left"
        >
          <div>
            <ValuePropositionSection />
          </div>
        </DetailsSection>
      </section>
      <FeatureSection />
      <PricingSection />
      <OutroSection />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};
