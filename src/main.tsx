import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove loading text when React mounts
const removeLoading = () => {
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    loadingElement.remove();
  }
};

// Ensure the root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  // Remove loading screen after React renders
  setTimeout(removeLoading, 100);
} catch (error) {
  console.error('Error mounting React app:', error);
  // Show error message instead of loading
  rootElement.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif;">
      <div style="text-align: center;">
        <h1 style="color: #dc2626; margin-bottom: 16px;">Error Loading Application</h1>
        <p style="color: #374151;">Please refresh the page or contact support.</p>
        <p style="color: #6b7280; font-size: 14px; margin-top: 16px;">Error: ${error.message}</p>
      </div>
    </div>
  `;
}