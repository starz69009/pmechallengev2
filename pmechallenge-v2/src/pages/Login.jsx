
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { email, role };
    localStorage.setItem('user', JSON.stringify(user));
    navigate(role === 'teacher' ? '/teacher' : '/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Connexion PME Challenge</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 w-full">
          <option value="student">Étudiant</option>
          <option value="teacher">Enseignant</option>
        </select>
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Login;
