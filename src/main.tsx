import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { EnhancedFavoritesProvider } from './context/EnhancedFavoritesContext';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <EnhancedFavoritesProvider>
          <App />
        </EnhancedFavoritesProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
);
