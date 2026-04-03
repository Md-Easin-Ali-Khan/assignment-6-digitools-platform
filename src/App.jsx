import { Suspense } from 'react'
import './App.css'
import Banner from './component/Banner'
import FooterSection from './component/FooterSection'
import MainSection from './component/mainSection'
import NavBar from './component/NavBar'
import PricingSection from './component/PricingSection'
import StartGuideSection from './component/StartGuideSection'
import StatsSection from './component/StatsSection'


const fetchProduct = async () => {
  const res = await fetch("/productData.json");
  return res.json()
}

function App() {
  const productPromise = fetchProduct()

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <StatsSection></StatsSection>

      <Suspense fallback={<span className="loading loading-dots loading-xl text-center"></span>}>
        <MainSection productPromise={productPromise}></MainSection>
      </Suspense>

      <StartGuideSection></StartGuideSection>

      <PricingSection></PricingSection>

      <FooterSection></FooterSection>
    </>
  )
}

export default App
