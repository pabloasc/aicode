import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Submit } from './pages/Submit';
import { AssistantPage } from './pages/AssistantPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/assistant/:id" element={<AssistantPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}