import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from "../components/Header";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
    </div>
  );
}
