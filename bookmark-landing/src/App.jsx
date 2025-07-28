import Nav from './components/nav-panel/Nav'
import Home from './landing-page/Home'
import Footer from './components/footer-panel/Footer'
import MUI from './added-components/MUIs/MUI'
import Extensions from './added-components/extensions-tab/Extensions'
import FAQ from './added-components/FAQ-tab/FAQ'
import Features from './added-components/features-tab/Features'

const App = () => {
  return (
    <div>
      <Nav/>

      <Home/>

      <Footer/>

      {/* <MUI/> */}

      {/* <Features/> */}

      {/* <Extensions/> */}

      {/* <FAQ/> */}
    </div>
  )
}

export default App
