import Head from 'next/head'
import Image from 'next/image'
import NavbarTop from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.containerFluid}>
      <Head>
        <title>Home | Pet shop</title>
        <meta name="description" content="Pet shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <NavbarTop/>

    </div>
  )
}
