import Image from 'next/image'
// import styles from './page.module.css'
import Connect from './components/Connect'

export default function Home() {
  return (
    <main className='flex items-center justify-center h-screen bg-gray-800 text-white'>
      <div className={''}>
        <div className={''}>
          <span>True Id</span>
        </div>
        <div>
          <Connect />
        </div>
      </div>

      
      
<div class="flex items-center justify-center h-screen bg-gray-800 text-white">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to True ID</h1>
    <h3 class="text-lg">Connect your wallet to get started</h3>
    <h4 class="text-lg">View the feed</h4>
  </div>
</div>

    </main>
  )
}
