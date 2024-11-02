"use client";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex gap-5 place-items-center justify-center items-center h-full w-full">
      <div className="flex flex-col flex-grow  md:flex-row md:px justify-center items-center min-h-screen w-full flex-wrap relative">
        <div className="justify-center items-center flex-none m-3">
          <h1 className="text-[35px] font-bold text-center">Giải Pháp In Thông Minh</h1>
          <h1 className="text-[35px] font-bold text-center md:pt-[10px]">Dành Cho Sinh Viên HCMUT</h1>
          <h1 className="text-[26px] font-bold text-center md:pt-[80px]">Chất Lượng-Thuận Tiện-Tiết Kiệm-Nhanh Chóng</h1>
        </div>
        <div className="justify-center items-center flex md:static absolute md:left-[50%] left-[30%] md:opacity-100 opacity-35  ">
          
          <Image src="/image/anh.png" alt="hinh" width={500} height={600} className="block" />

        </div>
      </div>

    </div>
  );
} 
