import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import RouterConfig from './RouterConfig.jsx';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="m-2 p-2 max-w-[800px] mx-auto">
      <NavBar />
      <RouterConfig />
      <Footer />
    </div>
  </BrowserRouter>
)
