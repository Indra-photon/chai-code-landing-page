import './App.css'
import Header from './components/layout/Header'
import TrustBadge from './components/layout/TrustBadge'
import Cohorts from './components/sections/Cohorts'
import CompanyLogos from './components/sections/CompanyLogos'
import HeroSection from './components/sections/HeroSection'
import TweetLove from './components/sections/TweetLove'
import UdemyCourses from './components/sections/UdemyCourses'
import KeyBenefits from './components/sections/KeyBenefits'
import AlumniNetwork from './components/sections/AlumniNetwork'
import WhyChaiCode from './components/sections/WhyChaiCode'
import TopicsCloud from './components/sections/TopicsCloud'
import Community from './components/sections/Community'
import FreeAPI from './components/sections/FreeAPI'

function App() {

  return (
    <>
      <Header />
      <TrustBadge />
      <HeroSection/>
      <TweetLove />
      <CompanyLogos/>
      <Cohorts />
      <UdemyCourses />
      <KeyBenefits />
      <AlumniNetwork />
      <WhyChaiCode />
      <TopicsCloud />
      <Community />
      <FreeAPI />
    </>
  )
}

export default App
