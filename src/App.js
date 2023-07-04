import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">    
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path ="/about" element={<About/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
