import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './component/Navbars';
import All from './component/All';
import Restaurants from './component/Restaurants';
function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        
        <Route path="/All" element={<All />} />
        <Route path="/" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
