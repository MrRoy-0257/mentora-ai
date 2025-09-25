import React, { useState } from 'react';
import axios from 'axios';

const QuizGenerator = () => {
  const [content, setContent] = useState('');
  const [quiz, setQuiz] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!content.trim()) return setError('Please enter content.');
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/quiz/generate', { content });
      setQuiz(res.data.quiz);
    } catch (err) {
      setError('Failed to generate quiz.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">🧠 AI Quiz Generator</h2>
      
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="6"
        placeholder="Paste or type notes here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        {loading ? 'Generating Quiz...' : 'Generate Quiz'}
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {quiz && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">📋 Quiz:</h3>
          <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">{quiz}</pre>
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
