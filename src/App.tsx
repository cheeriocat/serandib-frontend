import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Partners } from './pages/Partners';
import { Management } from './pages/Management';
import { Contact } from './pages/Contact';
import { ShaderPlayground } from './pages/ShaderPlayground';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/management" element={<Management />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shader-playground" element={<ShaderPlayground />} />
          {/* Catch all fallback redirects to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
