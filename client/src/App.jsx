import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Dashboard from '@/pages/Dashboard'
// import { useWindowSize } from '@/hooks/useWindowResize';
import Sidebar from '@/components/layouts/Sidebar';

function App() {

  // const [width, height] = useWindowSize();


  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />
          <div className='content'>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
