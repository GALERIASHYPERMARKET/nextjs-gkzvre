import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'
import Header from "../components/Header";
import logo from "../utils/logoEmpresarial.png"
export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Image
      src={logo}
      alt="Picture of the author"
       objectFit='cover' width={400} height={350} 
      />
    </div>
  );
}
