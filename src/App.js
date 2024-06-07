
import './App.css';
import About from './Componets/About';
import Enquire from './Componets/Enquire';
import Intro from './Componets/Intro';
import Intro2 from './Componets/Intro2';
import CenterMode from './Componets/Location';
import Navbar from './Componets/Navbar';
// import Testimonials from './Componets/Testimonial';
import Testimonialswi from './Componets/Testimonialswi';
// import Title from './Componets/Title';

function App() {
  return (
    <>
   <Navbar/>
   <Intro/>
   <Intro2/> 
   <CenterMode/>
   <Testimonialswi/>
   <Enquire/>
   <About/>
   </>

  );
}

export default App;
