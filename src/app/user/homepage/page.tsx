"use client";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex gap-5 place-items-center justify-center px-5 items-center w-full">
      <div className="flex flex-col flex-grow  md:flex-row  justify-center pt-[10px] md:pt-[60px] items-center w-full flex-wrap relative">
        <div className="justify-center items-center flex-none md:py-0 py-[90px]">
          <h1 className="md:text-[35px] text-[28px] font-bold text-center">Giải Pháp In Thông Minh</h1>
          <h1 className="md:text-[35px] text-[28px] font-bold text-center md:pt-[10px] pt-[10px]">Dành Cho Sinh Viên HCMUT</h1>
          <h1 className="md:text-[26px] text-[22px] font-bold text-center md:pt-[50px] pt-[30px]">Chất Lượng-Thuận Tiện-Tiết Kiệm-Nhanh Chóng</h1>
        </div>
        <div className="justify-center items-center flex md:static md:pt-0 pt-[77px] md:left-[50%] left-[30%] ">
          
          <Image src="/image/anh.png" alt="hinh" width={500} height={600} className="block" />

        </div>
      </div>

    </div>
  );
} 
