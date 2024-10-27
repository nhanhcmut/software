"use client";
import PrinterItem from "./printerItem";
import { useState } from "react";
import { PrinterItemInterface } from "./interface/printerItemInterface";
const printerListAPI: PrinterItemInterface[] = [
  {
    id: 1,
    name: "Printer A",
    status: "Online",
    paperCount: 100,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Printer B",
    status: "Offline",
    paperCount: 50,
    rating: 3.8,
  },
  {
    id: 3,
    name: "Printer C",
    status: "Online",
    paperCount: 200,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Printer D",
    status: "Maintenance",
    paperCount: 0,
    rating: 4.0,
  },
  {
    id: 5,
    name: "Printer E",
    status: "Online",
    paperCount: 150,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Printer F",
    status: "Offline",
    paperCount: 30,
    rating: 3.5,
  },
  {
    id: 7,
    name: "Printer G",
    status: "Online",
    paperCount: 180,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Printer H",
    status: "Maintenance",
    paperCount: 0,
    rating: 4.1,
  },
  {
    id: 9,
    name: "Printer I",
    status: "Online",
    paperCount: 250,
    rating: 4.9,
  },
  {
    id: 10,
    name: "Printer J",
    status: "Offline",
    paperCount: 40,
    rating: 3.7,
  },
  {
    id: 11,
    name: "Printer K",
    status: "Online",
    paperCount: 220,
    rating: 4.4,
  },
  {
    id: 12,
    name: "Printer L",
    status: "Maintenance",
    paperCount: 0,
    rating: 4.2,
  },
];
export default function PrinterManagement() {
  const [printerList, setPrinterList] =
    useState<PrinterItemInterface[]>(printerListAPI);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const totalPages = Math.ceil(printerList.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = printerList.slice(startIndex, endIndex);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        pageNumbers.unshift(1, "...");
      }

      if (endPage < totalPages) {
        pageNumbers.push("...", totalPages);
      }
    }

    return pageNumbers.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          className={`mx-1 px-2 py-1 rounded ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="mx-1">
          {page}
        </span>
      )
    );
  };

  return (
    <div>
      <div className="flex place-content-between gap-2">
        <h1 className="text-lg font-bold py-2">Thông tin máy in</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded">
          Thêm máy in
        </button>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">
            Hiển thị:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border rounded p-1"
          >
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-2">
        {currentItems.map((printer, i) => (
          <PrinterItem
            key={startIndex + i}
            id={printer.id}
            name={printer.name}
            status={printer.status}
            paperCount={printer.paperCount}
            rating={printer.rating}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Trang trước
        </button>
        {renderPageNumbers()}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Trang sau
        </button>
        <input
          className="border rounded p-1 w-16 ml-2"
          value={currentPage}
          onChange={(e) => setCurrentPage(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
