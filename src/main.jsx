// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

// Layout and Page Component Imports
import App from './Pages/App';
import LandingPage from './Pages/LandingPage';
import NotFoundPage from './Pages/NotFoundPage';

import "./assets/index.css";
import Layout from './Pages/Layout';


// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route wraps all page routes */}
        <Route path="/" element={<Layout />}>
          {/* Main pages */}
          <Route index element={<LandingPage />} />
          <Route path="cv-builder" element={<App />} />
        </Route>

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Rendering the Application
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<Application />);
} else {
  console.error('Failed to find the root element');
}