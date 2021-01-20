import Head from 'next/head';
import ReduxTester from '../components/ReduxTester';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ReduxTester/>
    </div>
  )
}
