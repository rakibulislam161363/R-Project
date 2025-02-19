import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './component/Navbars';
import All from './component/All';
import Restaurants from './component/Restaurants';
import Footer from './component/footer';
function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="" element={<All />} />
        <Route path="/Restaurants" element={<Restaurants />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
