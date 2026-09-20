import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Post from './components/Blog/Post';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <>
    <Layout>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<Navigate to="/projects" replace />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Post />} />
          <Route path="hobbies" element={<Hobbies />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
