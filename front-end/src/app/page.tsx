import HeroSection from '../components/Home/HeroSection'
import NavBar from '../components/Home/NavBar'
import StockCharts from '../components/Home/StockCharts'
import Contact from '../components/Home/Contact'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <StockCharts />
      <Contact />
    </main>
  )
}
