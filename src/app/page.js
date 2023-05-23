import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Header/header'
import elon from './components/Section/section'

export default function Home() {
  return (
    <main>
      <Navbar />
      <elon />
    </main>
  )
}
