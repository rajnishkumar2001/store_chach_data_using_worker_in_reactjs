import Navbar from './component/Navbar'
import Feature from './component/Feature';
import Price from './component/Price';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route index exact path="/" element={<Home/>} />
          <Route exact path="/feature" element={<Feature/>} />
          <Route exact path="/pricing" element={<Price/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
