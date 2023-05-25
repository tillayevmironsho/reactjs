import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Header/header'
import Elon from './components/Section/section'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Elon />
    </main>
  )
}
