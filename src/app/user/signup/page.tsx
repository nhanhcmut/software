"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name) {
      setError("Vui lòng điền tên.");
      return;
    }
    if (!email) {
      setError("Vui lòng điền email.");
      return;
    }
    if (!password) {
      setError("Vui lòng điền mật khẩu.");
      return;
    }
    if (!email.includes("@hcmut.edu.vn")) {
      setError("Email phải bao gồm '@hcmut.edu.vn'.");
      return;
    }
    const formData = { name, email, password };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Đăng ký thành công.');
      } else {
        const responseData = await response.json();
        setError(responseData.error || 'Đăng kí thất bại.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Gửi đơn bị lỗi.');
    }

  };

  return (
    <div className="flex gap-5 px-10 w-full h-screen">
      <div className="flex-grow flex justify-center items-start  pt-[80px]">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h1 className=" capitalize text-2xl font-bold text-center mb-4">
            đăng ký tài khoản
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Tên</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputMode="none"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="relative w-full">
              <label htmlFor="password" className="block text-sm font-bold mb-2">Mật khẩu</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pl-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập mật khẩu"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-2 top-[50px] transform -translate-y-1/2 ">
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-blue-600 text-white  rounded hover:bg-blue-700">
                Đăng ký
              </button>
            </div>
          </form>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}
