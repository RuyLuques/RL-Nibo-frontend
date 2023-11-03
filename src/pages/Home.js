import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import LandingPage from '../components/LandingPage/LandingPage'
import Projects from '../components/Projects/Projects'
import SEO from '../components/SEO/Seo'
import Automation from '../components/Automation/Automation'
import Footer from '../components/Footer/Footer'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <LandingPage/>
    <Projects/>
    <Automation/>
    <SEO/>
    <Footer/>
    </div>
  );
}

export default App;
