import { FC } from 'react';
import Head from 'next/head';

const HomePage: FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Serverless Pokédex</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="robots" content="noindex" />
      </Head>

      <div className="content">
        <a
          className="title"
          href="https://github.com/Cauaspinheiro/serverless-pokedex"
        >
          <h1>Serverless Pokédex</h1>
        </a>

        <img src="/charmander.gif" alt="Charmander" />

        <a
          className="image-credits"
          href="https://www.behance.net/gallery/41494551/Charmander?tracking_source=search_projects_recommended%7Cpokemon"
          rel="noopener noreferrer"
        >
          Art by Ashley Odell on Behance
        </a>
      </div>
    </div>
  );
};

export default HomePage;
