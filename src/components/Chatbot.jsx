import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me any academic question 👋' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/ai/chat', {
        prompt: input,
      });

      setMessages([...newMessages, { sender: 'bot', text: res.data.response }]);
    } catch (err) {
      setMessages([...newMessages, { sender: 'bot', text: '❌ Error: AI failed to respond.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-4">
      <h2 className="text-2xl font-bold text-center mb-4">💬 AI Chatbot</h2>

      <div className="h-72 overflow-y-auto mb-4 border p-3 rounded bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-500 italic text-sm">Typing...</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
