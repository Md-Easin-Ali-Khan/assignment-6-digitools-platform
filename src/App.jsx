import './App.css'
import Banner from './component/Banner'
import NavBar from './component/NavBar'
import PricingSection from './component/PricingSection'
import StartGuideSection from './component/StartGuideSection'
import StatsSection from './component/StatsSection'
import ToolsSection from './component/ToolsSection'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <ToolsSection></ToolsSection>
      <StartGuideSection></StartGuideSection>
      <PricingSection></PricingSection>
    </>
  )
}

export default App
