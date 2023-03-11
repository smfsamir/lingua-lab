import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Trial from '../components/trial';
import Quiz from '../components/quiz';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
    // read data.json file.
  const data = require('../components/data.json');
  // randomly select two unique indices from the data array.
    const randomIndices = [];
    while (randomIndices.length < 5) {
        const randomIndex = Math.floor(Math.random() * data.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    // create a question bank with the randomly selected indices.
    const questionBank = [];
    for (let i = 0; i < randomIndices.length; i++) {
        const randomIndex = randomIndices[i];
        const question = data[randomIndex];
        questionBank.push(question);
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header style_title={styles.title}/>

        <p className={styles.description}>
          For error-driven learning of the Nłeʔkepmxcin language.
        </p>
        {/* Container for the app goes here. */}

        <Quiz styles={styles} questionBank={questionBank}/>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
