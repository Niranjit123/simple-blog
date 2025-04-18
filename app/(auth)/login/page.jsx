'use client';
import Header from "@/components/common/Header";
import Footer from "@/components/common/footer";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div>
      <Header />
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="flex my-5 flex-col px-10 border-4 py-5">
          {/* Email Input */}
          <label htmlFor="email">Email</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            autoComplete="email"  // Critical for hydration
            placeholder="Enter your email"
          />

          {/* Password Input */}
          <label htmlFor="password">Password</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"  // Critical for hydration
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-300 rounded px-3 py-2 hover:bg-blue-400"
        >
          Login
        </button>
      </form>
      <Footer />
    </div>
  );
}