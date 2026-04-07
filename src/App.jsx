import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import StatsSection from './component/StatsSection'
import MainSection from './component/MainSection'
import StartGuideSection from './component/StartGuideSection'
import PricingSection from './component/PricingSection'
import FooterSection from './component/FooterSection'
import { ToastContainer } from 'react-toastify'

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

      <ToastContainer></ToastContainer>

      <Suspense fallback={<div className='flex justify-center'><span className="loading loading-dots loading-xl text-center"></span></div>}>

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