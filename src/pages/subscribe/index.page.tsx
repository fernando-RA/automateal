import Router from 'next/router';
import { FormEvent, useState } from 'react';
import LandingPage from '../../components/layouts/landingPage/LandingPage';
import { Logo } from '../../components/navigation/Logo/Logo';
import { NextPageWithLayout } from '../page';
import styles from './subscribe.module.scss';

const Subscribe: NextPageWithLayout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();
    console.log('createSubscriber');
    Router.push('/');
  };
  return (
    <div className={styles.hero_banner_section}>
      <div className={styles.hero_banner_container}>
        <div className={styles.hero_banner_wrapper}>
          <Logo />
          <h1 className={styles.main_title}>
            Aumente o faturamento da sua{' '}
            <strong className={styles.text_evidence}>empresa</strong>
            <br />
            com nossa estratégia de{' '}
            <strong className={styles.text_evidence}>Inside Sales</strong>
          </h1>
          <p className={styles.description}>
            Vendas ativas não te dão trabalho, te dão dinheiro 💰
          </p>
        </div>

        <div className={styles.subscribe_sidebar_wrapper}>
          <strong className={styles.subscribe_sidebar_title}>
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubscribe} className={styles.subscribe_form}>
            <input
              className={styles.subscribe_input_field}
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className={styles.subscribe_input_field}
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              // disabled={}
              className={styles.subscribe_form_submit_btn}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

Subscribe.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};
