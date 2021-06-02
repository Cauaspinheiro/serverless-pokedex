import { FC } from 'react';
import Head from 'next/head';

const HomePage: FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Serverless Pokedex</title>
      </Head>

      <h1>Serverless Pokedex</h1>
    </div>
  );
};

export default HomePage;
