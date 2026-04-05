import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import StatsSection from './component/StatsSection'
import MainSection from './component/MainSection'
import StartGuideSection from './component/StartGuideSection'
import PricingSection from './component/PricingSection'
import FooterSection from './component/FooterSection'

const fetchProduct = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};

const productPromise = fetchProduct();

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <>
      <NavBar selectedProduct={selectedProduct} ></NavBar>

      <Banner></Banner>

      <StatsSection></StatsSection>

      <Suspense fallback={<span className="loading loading-dots loading-xl text-center"></span>}>

        <MainSection
          productPromise={productPromise}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        ></MainSection>

      </Suspense>

      <StartGuideSection></StartGuideSection>

      <PricingSection></PricingSection>

      <FooterSection></FooterSection>
    </>
  )
}

export default App