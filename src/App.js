import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import FAQ from './components/faq/FAQ';
import Documents from './components/documents/Documents';
import Contacts from './components/contacts/Contacts';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
