import About from '../components/About'
import Benefits from '../components/Benefits'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import InsuranceCosts from '../components/InsuranceCosts'
import Process from '../components/Process'
import ServiceArea from '../components/ServiceArea'
import Services from '../components/Services'
import TrustBar from '../components/TrustBar'

export default function Home() {
  return <><Header /><main id="hauptinhalt"><Hero /><TrustBar /><Services /><Process /><InsuranceCosts /><Benefits /><ServiceArea /><About /><FinalCTA /></main><Footer /></>
}
