import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonial />
    </div>
  )
}

export default App
