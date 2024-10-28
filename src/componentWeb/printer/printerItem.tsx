"use client";
import Image from "next/image";
import { PrinterItemInterface } from "./interface/printerItemInterface";

export default function PrinterItem(printer: PrinterItemInterface) {
  return (
    <div>
      <div
        onClick={printer.onClick}
        className="border-2 rounded-md hover:border-white border-green-100 bg-white hover:bg-sky-600 shadow-lg hover:shadow-2xl items-center gap-4 pb-3 pt-2"
      >
        <Image
          width={80}
          height={80}
          className="h-80 w-60 rounded-full"
          src="/image/print_machine.png"
          alt=""
        />
        <div className="flex p-2 bg-white m-3 rounded-md shadow-md place-content-center flex-col font-medium dark:text-white">
          <p className="text-lg font-bold">Máy in: {printer.manufacturer}</p>
          <p className="text-lg font-bold">Model: {printer.model}</p>
          <p className="text-lg font-bold">Trạng thái: {printer.status}</p>
          <p className="text-lg font-bold">Mô tả: {printer.description}</p>
          <p className="text-lg font-bold">Phòng: {printer.room}</p>
          <p className="text-lg font-bold">Tòa nhà: {printer.building}</p>
          <p className="text-lg font-bold">Loại máy in: {printer.type}</p>
        </div>
      </div>
    </div>
  );
}
