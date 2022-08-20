import './App.css';
import Layout from './components/shared/Layout';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import RequireAuth from './pages/authentication/RequireAuth';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>Route not found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
