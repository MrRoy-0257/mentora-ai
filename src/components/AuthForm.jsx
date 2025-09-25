import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅ use login & logout

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { user, login, logout } = useAuth(); // ✅ use functions from context

  useEffect(() => {
    if (user) {
      navigate('/chat');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const endpoint = isLogin ? 'login' : 'register';
    const payload = isLogin
      ? { email: form.email, password: form.password }
      : form;

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, payload);
      login(res.data.user, res.data.token); // ✅ call login from context
      setMessage('✅ Success! Welcome.');
    } catch (err) {
      setMessage('❌ ' + (err.response?.data?.error || 'Something went wrong'));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border"
      >
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Welcome, {user.name} 👋
            </h2>
            <p className="text-gray-600 mb-4">Email: {user.email}</p>
            <button
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-2 font-bold rounded-l-xl ${
                  isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-2 font-bold rounded-r-xl ${
                  !isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Register
              </button>
            </div>

            {!isLogin && (
              <input
                className="w-full border border-gray-300 px-3 py-2 mb-3 rounded"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
            )}

            <input
              className="w-full border border-gray-300 px-3 py-2 mb-3 rounded"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              className="w-full border border-gray-300 px-3 py-2 mb-3 rounded"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>

            {message && (
              <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AuthForm;
