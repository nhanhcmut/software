"use client";
import React, { useEffect, useState } from "react";
import { PrinterItemInterface } from "./interface/printerItemInterface";
export interface printerConfigInterface {
  id: string;
  onClose: () => void;
}
export interface printerUpdateInterface {
  status?: string;
  manufacturer?: string;
  model?: string;
  description?: string;
  room?: string;
  building?: string;
}
export default function PrintConfig(printer: printerConfigInterface) {
  const [printerObj, setprinterObj] = useState<PrinterItemInterface>(
    {} as PrinterItemInterface
  );

  const fetchData = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_URL;
    try {
      const response = await fetch(apiUrl + "/printers/" + printer.id);
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setprinterObj(data.data);
    } catch (error) {
      console.error("Error fetching printers:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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

    const data: printerUpdateInterface = {
      status: form.status.value,
    };
    fetch(`${process.env.NEXT_PUBLIC_URL}/printers/${printerObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        printer.onClose();
      });
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
          <p className="text-md font-bold">ID: {printerObj.id}</p>
          <p className="text-md font-bold">Máy in: {printerObj.manufacturer}</p>
          <p className="text-md font-bold">Model: {printerObj.model}</p>
          <p className="text-md font-bold">Trạng thái: {printerObj.status}</p>
          <p className="text-md font-bold">Mô tả: {printerObj.description}</p>
          <p className="text-md font-bold">Phòng: {printerObj.room}</p>
          <p className="text-md font-bold">Tòa nhà: {printerObj.building}</p>
          <p className="text-md font-bold">Loại máy in: {printerObj.type}</p>
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
