"use client";
import Image from "next/image";
import { PrinterItemInterface } from "./interface/printerItemInterface";

export default function PrinterItem(printer: PrinterItemInterface) {
  return (
    <div>
      <div className="border-2 rounded-md hover:border-white border-green-100 bg-white hover:bg-sky-600 shadow-lg hover:shadow-2xl items-center gap-4 pb-3 pt-2">
        <Image
          width={80}
          height={80}
          className="h-80 w-60 rounded-full"
          src="/image/print_machine.png"
          alt=""
        />
        <div className="flex p-2 bg-white m-3 rounded-md shadow-md place-content-center flex-col font-medium dark:text-white">
          <h1>{printer.name}</h1>
          <h2 className="text-xs">Trạng thái: {printer.status}</h2>
          <h2 className="text-xs">Giấy còn lại : {printer.paperCount} tờ</h2>
          <h2 className="text-xs">Đánh giá : {printer.rating}</h2>
        </div>
      </div>
    </div>
  );
}
