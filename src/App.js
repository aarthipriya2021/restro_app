import './App.css';
import Navbar from './components/Navbar/Navbar';
import { About, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
