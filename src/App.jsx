import './App.css'
import Header from './components/layout/Header'
import TrustBadge from './components/layout/TrustBadge'
import Cohorts from './components/sections/Cohorts'
import CompanyLogos from './components/sections/CompanyLogos'
import HeroSection from './components/sections/HeroSection'
import TweetLove from './components/sections/TweetLove'

function App() {

  return (
    <>
      <Header />
      <TrustBadge />
      <HeroSection/>
      <TweetLove />
      <CompanyLogos/>
      <Cohorts />
    </>
  )
}

export default App
