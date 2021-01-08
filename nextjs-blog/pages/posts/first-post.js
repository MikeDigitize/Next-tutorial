import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../components/article.module.scss';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <article className={styles.article}>
        <p>An article!</p>
      </article> 
    </Layout>
  );
}
