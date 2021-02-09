import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <div className={styles.container}>
      Hello world
      <Loader show={true}/>
    </div>
  )
}
