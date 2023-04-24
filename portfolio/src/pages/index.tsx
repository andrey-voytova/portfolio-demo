
import About from '@/components/About/About'
import Footer from '@/components/common/Footer/Footer'
import Portfolio from '@/components/common/Portfolio/Portfolio'
import Contact from '@/components/Contact/Contact'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'
import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <link rel="icon" type='image.svg' sizes='32x32' href="/img/logo.svg" />
      </Head>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
        <Footer/>
      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>

    </>
  )
}
