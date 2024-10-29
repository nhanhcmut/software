"use client";
import PrinterItem from "./printerItem";
import { useEffect, useState } from "react";
import { PrinterItemInterface } from "./interface/printerItemInterface";
import AddPrint from "./printAdd";
import PrintConfig from "./printerConfig";
export default function PrinterManagement() {
  const [printerList, setPrinterList] = useState<PrinterItemInterface[]>([]);
  const fetchData = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_URL;
    try {
      const response = await fetch(apiUrl + "/printers");
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPrinterList(data.data);
    } catch (error) {
      console.error("Error fetching printers:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Adjust Print
  const [isConfigPrint, setIsConfigPrint] = useState(false);

  // Add printer

  const [isAddPrint, setIsAddPrint] = useState(false);

  // Pagination
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
  const currentItems =
    printerList.length > 0 ? printerList.slice(startIndex, endIndex) : [];

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
    <>
      <div className="flex  gap-2">
        <h1 className="text-lg font-bold py-2">Thông tin máy in</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded"
          onClick={() => setIsAddPrint(!isAddPrint)}
        >
          Thêm máy in
        </button>
      </div>
      {isAddPrint && (
        <AddPrint
          onClose={() => {
            setIsAddPrint(false);
          }}
        />
      )}

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
      <div className=" grid lg:grid-cols-3 gap-4 mt-2">
        {currentItems.map((printer, key) => (
          <>
            <PrinterItem
              key={key}
              id={printer.id}
              building={printer.building}
              description={printer.description}
              manufacturer={printer.manufacturer}
              model={printer.model}
              room={printer.room}
              status={printer.status}
              type={printer.type}
              onClick={() => setIsConfigPrint(!isConfigPrint)}
            />
            {isConfigPrint && (
              <PrintConfig
                key={key}
                id={printer.id}
                onClose={() => {
                  setIsConfigPrint(false);
                }}
              />
            )}
          </>
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
    </>
  );
}
