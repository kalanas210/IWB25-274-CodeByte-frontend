import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import AppRoutes from './AppRoutes';

function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file');
  }
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <AppRoutes />
      </Router>
    </ClerkProvider>
  );
}

export default App;