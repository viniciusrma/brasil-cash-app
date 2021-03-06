import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header.js'
import SalesForm from '../components/salesForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brasil Cash App</title>
      </Head>
      <Header />
      <SalesForm />
    </div>
  )
}
