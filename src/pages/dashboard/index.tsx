import { useState } from 'react';
import { NextPageWithLayout } from '../../@types/page';
import LandingPage from '../../components/layouts/landingPage/LandingPage';

const Subscribe: NextPageWithLayout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return <div></div>;
};

export default Subscribe;

Subscribe.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};
