import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import LessonViewer from './pages/LessonViewer';

function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: '1rem' }}>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Courses grid */}
          <Route path="/courses" element={<Courses />} />

          {/* Dynamic lesson viewer for each course */}
          <Route path="/courses/:courseId" element={<LessonViewer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
