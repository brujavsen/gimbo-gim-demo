import Footer from "./components/Footer"
import Galery from "./components/Galery"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Offered from "./components/Offered"
import { inject } from '@vercel/analytics';

function App() {
  inject();
  return (
    <>
      <Header/>
      <Offered/>
      <Galery/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
