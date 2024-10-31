"use client";
import React, { useState } from "react";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    // Giả sử bạn có một API để kiểm tra thông tin đăng nhập
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
      // Xử lý thành công (chuyển hướng hoặc thông báo thành công)
      console.log('Login successful');
    } else {
      // Xử lý lỗi (hiển thị thông báo lỗi)
      setError(data.message || 'Đăng nhập thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <div className="flex gap-5 px-10 place-items-center w-full">
      <div className="flex flex-col md:flex-row md:justify-between justify-center md:mx-[130px] mx-auto items-center w-full flex-wrap min-h-screen relative">
        <div className="justify-center items-center flex-none">
          <div className="w-full">
            <Image src="/image/slogan.png" alt="slogan" layout="responsive" width={100} height={100} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="">
              <label htmlFor="username" className="block text-base">Tên tài khoản</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="h-[40px] pl-2 pr-2 leading-[45px] rounded-[5px] w-full text-3xl focus:ring-0 focus:outline-none focus:border-gray-600 bg-[#D9D9D9]"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="block text-base">Mật khẩu</label>
              <div className="relative w-full">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="h-[40px] pl-2 pr-10 leading-[40px] rounded-[5px] w-full text-4xl focus:ring-0 focus:outline-none focus:border-gray-600 bg-[#D9D9D9]" 
                />
                <button 
                  type="button" 
                  onClick={toggleShowPassword} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            <div className="text-right mt-2">
              <a href="/forgot-password" className="text-blue-600 hover:underline">Quên mật khẩu?</a>
            </div>
            <div className="flex justify-center items-center">
              <button 
                type="button" 
                onClick={handleLogin} 
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Đăng nhập ngay
              </button>
            </div>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
          <h1 className="mt-3">Lưu ý:</h1>
          <span>Bạn cần dùng hcmut để đăng nhập</span>
        </div>
        <div className="flex justify-center items-center w-fit">
          <Image src="/image/anh.png" alt="hinh" width={500} height={500} className="block" />
        </div>
      </div>
    </div>
  );
}
