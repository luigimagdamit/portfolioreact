import { useState } from 'react'
import './App.css'
import Border from './components/border';
import Header from './components/header'
import { AboutMe, Education, Skills } from './components/aboutme'
import Projects from './components/projects'
import Quote from './components/quote';
import Bottom from './components/bottom';
function Main() {
  return (
    <div>
      <Header />
      <Border />
      <AboutMe />
      <Education />
      <Skills />
      <h1 className="projectsText" id="proj">Projects</h1>
      <p className='projectP'>All I've made throughout the years!</p>
      <hr className="linebreak"></hr>
      <Projects />
      <Quote />
      <Bottom />
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App
