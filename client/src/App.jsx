import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import RoutesPage from './pages/RoutesPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className='flex h-screen w-screen flex-col justify-between'>
          <header>
            <NavBar />
          </header>

          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/buy' element={<RoutesPage />} />
              <Route path='/login' element={<HomePage />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
