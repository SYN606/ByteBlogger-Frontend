import React, { Suspense } from 'react';
import { HeadProvider } from 'react-head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import { Base } from './components';
import { Blogs, Homepage, NotFoundPage, SignIn } from './pages';

function App() {
  return (
    <HeadProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route index element={<Homepage />} />
              <Route path="sign_in" element={<SignIn />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HeadProvider>
  );
}

export default App;
