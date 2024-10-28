"use client";
import React, { useEffect } from "react";
export interface printerConfigInterface {
  id: string;
  status: string;
  manufacturer: string;
  model: string;
  description: string;
  room: string;
  building: string;
  type: string;
  onClose: () => void;
}
export default function PrintConfig(printer: printerConfigInterface) {
  const Url = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      printer.onClose();
    }
  };
  const handleAdjust = (e: any) => {
    e.preventDefault();
    const form = e.target;
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onMouseDown={handleClickOutside}
    >
      <div className="bg-white relative rounded-lg shadow-lg place-items-center">
        <button
          className="bg-red-500 absolute right-0 hover:bg-red-700 text-white text-xs font-bold py-1 px-2 rounded"
          onClick={printer.onClose}
        >
          X
        </button>
        <div className="place-items-center px-7 py-2 w-full">
          <h1 className="text-md font-bold py-2">Thông tin máy in</h1>
          <p className="text-md font-bold">ID: {printer.id}</p>
          <p className="text-md font-bold">Máy in: {printer.manufacturer}</p>
          <p className="text-md font-bold">Model: {printer.model}</p>
          <p className="text-md font-bold">Trạng thái: {printer.status}</p>
          <p className="text-md font-bold">Mô tả: {printer.description}</p>
          <p className="text-md font-bold">Phòng: {printer.room}</p>
          <p className="text-md font-bold">Tòa nhà: {printer.building}</p>
          <p className="text-md font-bold">Loại máy in: {printer.type}</p>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded"
            onClick={handleAdjust}
          >
            Cập nhật trạng thái
          </button>
        </div>
      </div>
    </div>
  );
}
