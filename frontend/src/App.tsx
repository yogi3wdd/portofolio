import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* Halaman lain tetap akan memiliki Navbar karena dibungkus MainLayout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;