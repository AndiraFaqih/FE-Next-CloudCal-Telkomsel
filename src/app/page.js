// import TriangleView from '../../components/TriangleView';
import Head from 'next/head';
import Index from '../../components/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Triangle Area Calculator</title>
      </Head>

      <main className="flex justify-center items-center h-screen" style={{ backgroundColor: "#0C134F" }}>
        <Index />
      </main>
    </div>
  );
}
