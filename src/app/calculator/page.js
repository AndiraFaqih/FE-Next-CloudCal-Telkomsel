import Head from 'next/head';
import TriangleView from '../../../components/TriangleView';

export default function calcc() {
  return (
    <div>
      <Head>
        <title>Triangle Area Calculator</title>
      </Head>

      <main className="flex justify-center items-center h-screen">
        <TriangleView />
      </main>
    </div>
  );
}
