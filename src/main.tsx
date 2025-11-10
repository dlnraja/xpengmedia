import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { EnhancedFavoritesProvider } from './context/EnhancedFavoritesContext';
import './index.css';
import App from './App';

const base = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={base}>
      <ThemeProvider>
        <EnhancedFavoritesProvider>
          <App />
        </EnhancedFavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
