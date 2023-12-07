import Image from 'next/image'
import styles from './page.module.css'
import Connect from './components/Connect'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.logoContainer}>
          <span  className='text-2xl text-white'>Privasphere</span>
        </div>
        <div>
          <Connect />
        </div>
      </div>

      <div className='text-white'>
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Privasphere</h1>
        <h2 className="text-3xl font-bold mb-4">The tusted network where you can truly be yourself</h2>
        <h4 className="text-xl font-bold mb-4">Connect Your Starknet wallet to get started</h4>

      </section>
      </div>

      <div className={styles.grid}>
        
      </div>
    </main>
  )
}
