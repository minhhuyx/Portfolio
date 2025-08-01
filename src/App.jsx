import About from './components/About.jsx';
import BackToTop from './components/BackToTop.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
function App() {
  return (
     <>
      <Header />
     <div className='p-8 '>
        <div className='mt-20'>
          <Hero />
        </div>
        <Skills />
        <About/>
        <Projects />
        <Contact />
     </div>
        <Footer />
        <BackToTop />
    </>
  )
}

export default App
