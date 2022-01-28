import Head from 'next/head'
import Image from 'next/image'
import { Row,Col } from 'react-bootstrap'
import HomeSlider from '../components/homeSlider'
import HomeSlider2 from '../components/homeslider2'
import NavbarTop from '../components/navbar'
import SideNav from '../components/sidenav'
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
    <Row>
      <Col lg={2}>
          <SideNav className={styles.sidenav} />
      </Col>
      <Col lg={5}>
        <HomeSlider/>
      </Col>
      <Col lg={5}>
        <HomeSlider2/>
      </Col>
    </Row>

    </div>
  )
}
