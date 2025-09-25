// client/src/components/SummaryUploader.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SummaryUploader = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSummary('');
    setError('');
  };

  const handleUpload = async () => {
    if (!file) return setError('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/summary/summarize', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSummary(res.data.summary);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to summarize file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-xl rounded-2xl mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">📄 Upload Notes for AI Summary</h2>
      
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        className="mb-4 block w-full"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Summarizing...' : 'Generate Summary'}
      </button>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {summary && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">🧠 AI Summary:</h3>
          <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">{summary}</pre>
        </div>
      )}
    </div>
  );
};

export default SummaryUploader;
