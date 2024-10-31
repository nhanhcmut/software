"use client";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex gap-5 px-10 place-items-center w-full">
      <div className="flex flex-col md:flex-row md:justify-between justify-center md:mx-[130px] items-center w-full flex-wrap min-h-screen  relative">
        <div className="justify-center items-center flex-none">
          <h1 className="text-[35px] font-bold text-center">Giải Pháp In Thông Minh</h1>
          <h1 className="text-[35px] font-bold text-center pt-[10px]">Dành Cho Sinh Viên HCMUT</h1>
          <h1 className="text-[26px] font-bold text-center pt-[30px]">Chất Lượng-Thuận Tiện-Tiết Kiệm-Nhanh Chóng</h1>
        </div>
        <div className="justify-center items-center  flex md:static absolute md:left-[50%] left-[30%] md:opacity-100 opacity-35">
          <Image src="/image/anh.png" alt="hinh" width={500} height={500} className="block" />

        </div>
      </div>

    </div>
  );
}
