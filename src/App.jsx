import Layout from './components/layout/Layout'
import Home from './modules/home/Home'
import About from './modules/about/About'
import Projects from './modules/projects/Projects'
import Services from './modules/services/Services'
import './styles/index.css';


function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Projects />
        <Services />
      </Layout>
    </>
  )
}

export default App
