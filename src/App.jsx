import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Offered from "./components/Offered"
import Galery from "./components/Galery"
import Location from "./components/Location"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Offered />
        <Galery />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
