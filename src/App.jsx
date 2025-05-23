import './App.css'
import Header from './components/layout/Header'
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
import MobileAppSection from './components/sections/MobileAppSection'
import Footer from './components/layout/Footer'
import CommunityShowcase from '../src/CommunityShowcase/CommunityShowcase'
import YouTubeChannelsSection from './components/sections/YouTubeChannelsSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection/>
      <CommunityShowcase />
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
      <YouTubeChannelsSection />
      <MobileAppSection />
      <Footer />
    </>
  )
}

export default App
