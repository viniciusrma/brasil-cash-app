import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header.js'
import SalesTable from '../components/salesTable'

export default function Sales() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brasil Cash App - Sales</title>
      </Head>
      <Header />
      <SalesTable />
    </div>
  )
}
