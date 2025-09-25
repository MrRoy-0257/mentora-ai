import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ Import this

// Pages
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import NotesPage from './pages/NotesPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
// import ImageGenerator from './pages/ImageGenerator';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* 🔒 Protected Routes */}
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <NotesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <QuizPage />
              </ProtectedRoute>
            }

          />
          {/* <Route path="/image-generator" element={<ImageGenerator />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
