import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Base, ScrollToTop, ProtectedRoute, UserProfile, ChangePassword } from './components';
import { AboutUs, Blogs, Homepage, NotFoundPage, Otp, RenderBlog, SignIn, SignUp } from './pages';
import { Admin, BlogManagement, CreateBlog } from './admin';
import { HeadProvider } from 'react-head';

function App() {
  return (

    <BrowserRouter>
      <HeadProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Homepage />} />
            <Route path="sign_in" element={<SignIn />} />
            <Route path="submit_otp" element={<Otp />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="sign_up" element={<SignUp />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<RenderBlog />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<UserProfile />} />
              <Route path="change_your_password" element={<ChangePassword />} />
              {/* testing */}
              <Route path="admin" element={<Admin />} />
              <Route path="admin/blog_management" element={<BlogManagement />} />
              <Route path="admin/blog_management/create_new_blog" element={<CreateBlog />} />
            </Route>


            {/* Error Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HeadProvider>
    </BrowserRouter>
  );
}

export default App;
