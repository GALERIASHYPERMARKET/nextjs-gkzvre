import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'
import Header from "../components/Header";

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <img src="../utils/logoEmpresarial.png" alt="" />
    </div>
  );
}
