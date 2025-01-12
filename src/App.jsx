import React, { Suspense } from 'react';
import { HeadProvider } from 'react-head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

// Lazy-loaded components
const Base = React.lazy(() => import('./components/Base'));
const Homepage = React.lazy(() => import('./pages/Homepage'));
const ErrorPage = React.lazy(() => import('./pages/Error_page'));
const SignIn = React.lazy(() => import('./pages/SignIn'));

function App() {
  return (
    <HeadProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route index element={<Homepage />} />
              <Route path="sign_in" element={<SignIn />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HeadProvider>
  );
}

export default App;
