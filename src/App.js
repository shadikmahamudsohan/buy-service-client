import './App.css';
import Layout from './components/shared/Layout';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Route not found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
