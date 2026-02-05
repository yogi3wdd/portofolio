import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Merge from './pages/Merge';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Merge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;