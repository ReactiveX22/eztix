import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { CustomerProvider } from './contexts/CustomerContext';
import CreateCoachPage from './pages/CreateCoachPage';
import CreateRoutePage from './pages/CreateRoutePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RoutesPage from './pages/RoutesPage';

function App() {
  return (
    <>
      <Router>
        <div className='flex h-screen w-screen flex-col justify-between'>
          <header>
            <CustomerProvider>
              <NavBar />
            </CustomerProvider>
          </header>

          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/buy' element={<RoutesPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/coach/create' element={<CreateCoachPage />} />
              <Route path='/route/create' element={<CreateRoutePage />} />
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
