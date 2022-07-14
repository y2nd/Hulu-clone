import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hulu clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      {/* Header */}
      <Header />
      {/* Nav */}

      {/* Results */}
    </div>
  )
}
