"use client";
import { useState } from "react";
import { StudentInterface } from "./interface/studentInterface.tsx";
import StudentInfo from "./StudentInfo";
const printerListAPI: StudentInterface[] = [
  {
    id: 1,
    name: "Printer A",
    major: "Computer Science",
    address: "Hanoi",
    printId: 1,
    date: "2021-10-10",
    printName: "Printer A",
    status: "Done",
  },
  {
    id: 2,
    name: "Printer B",
    major: "Information Technology",
    address: "Hanoi",
    printId: 2,
    date: "2021-10-11",
    printName: "Printer B",
    status: "Pending",
  },
  {
    id: 3,
    name: "Printer C",
    major: "Computer Science",
    address: "Hanoi",
    printId: 3,
    date: "2021-10-12",
    printName: "Printer C",
    status: "Done",
  },
  {
    id: 4,
    name: "Printer D",
    major: "Information Technology",
    address: "Hanoi",
    printId: 4,
    date: "2021-10-13",
    printName: "Printer D",
    status: "Pending",
  },
  {
    id: 5,
    name: "Printer E",
    major: "Computer Science",
    address: "Hanoi",
    printId: 5,
    date: "2021-10-14",
    printName: "Printer E",
    status: "Done",
  },
  {
    id: 6,
    name: "Printer F",
    major: "Information Technology",
    address: "Hanoi",
    printId: 6,
    date: "2021-10-15",
    printName: "Printer F",
    status: "Pending",
  },
  {
    id: 7,
    name: "Printer G",
    major: "Computer Science",
    address: "Hanoi",
    printId: 7,
    date: "2021-10-16",
    printName: "Printer G",
    status: "Done",
  },
  {
    id: 8,
    name: "Printer H",
    major: "Information Technology",
    address: "Hanoi",
    printId: 8,
    date: "2021-10-17",
    printName: "Printer H",
    status: "Pending",
  },
  {
    id: 9,
    name: "Printer I",
    major: "Computer Science",
    address: "Hanoi",
    printId: 9,
    date: "2021-10-18",
    printName: "Printer I",
    status: "Done",
  },
  {
    id: 10,
    name: "Printer J",
    major: "Information Technology",
    address: "Hanoi",
    printId: 10,
    date: "2021-10-19",
    printName: "Printer J",
    status: "Pending",
  },
  {
    id: 11,
    name: "Printer K",
    major: "Computer Science",
    address: "Hanoi",
    printId: 11,
    date: "2021-10-20",
    printName: "Printer K",
    status: "Done",
  },
  {
    id: 12,
    name: "Printer L",
    major: "Information Technology",
    address: "Hanoi",
    printId: 12,
    date: "2021-10-21",
    printName: "Printer L",
    status: "Pending",
  },
  {
    id: 13,
    name: "Printer M",
    major: "Computer Science",
    address: "Hanoi",
    printId: 13,
    date: "2021-10-22",
    printName: "Printer M",
    status: "Done",
  },
  {
    id: 14,
    name: "Printer N",
    major: "Information Technology",
    address: "Hanoi",
    printId: 14,
    date: "2021-10-23",
    printName: "Printer N",
    status: "Pending",
  },
  {
    id: 15,
    name: "Printer O",
    major: "Computer Science",
    address: "Hanoi",
    printId: 15,
    date: "2021-10-24",
    printName: "Printer O",
    status: "Done",
  },
  {
    id: 16,
    name: "Printer P",
    major: "Information Technology",
    address: "Hanoi",
    printId: 16,
    date: "2021-10-25",
    printName: "Printer P",
    status: "Pending",
  },
  {
    id: 17,
    name: "Printer Q",
    major: "Computer Science",
    address: "Hanoi",
    printId: 17,
    date: "2021-10-26",
    printName: "Printer Q",
    status: "Done",
  },
  {
    id: 18,
    name: "Printer R",
    major: "Information Technology",
    address: "Hanoi",
    printId: 18,
    date: "2021-10-27",
    printName: "Printer R",
    status: "Pending",
  },
  {
    id: 19,
    name: "Printer S",
    major: "Computer Science",
    address: "Hanoi",
    printId: 19,
    date: "2021-10-28",
    printName: "Printer S",
    status: "Done",
  },
  {
    id: 20,
    name: "Printer T",
    major: "Information Technology",
    address: "Hanoi",
    printId: 20,
    date: "2021-10-29",
    printName: "Printer T",
    status: "Pending",
  },
];
export default function ListStudent() {
  //Pagination
  const [printerList, setPrinterList] =
    useState<StudentInterface[]>(printerListAPI);
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

  //open info
  const [openInfo, setOpenInfo] = useState(false);
  const [studentInfo, setStudentInfo] = useState<StudentInterface | null>(null);
  return (
    <div className="relative w-full md:w-2/3 ">
      <div className="flex place-content-between gap-2">
        <h1 className="text-lg font-bold py-2">Thông tin máy in</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded">
          Thêm máy in
        </button>
      </div>
      {openInfo && studentInfo && (
        <StudentInfo
          id={studentInfo.id}
          name={studentInfo.name}
          address={studentInfo.address}
          printId={studentInfo.printId}
          printName={studentInfo.printName}
          date={studentInfo.date}
          status={studentInfo.status}
          onClose={() => setOpenInfo(false)}
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
        <div>
          <label htmlFor="search" className="mr-2">
            Tìm kiếm:
          </label>
          <input
            id="search"
            type="text"
            className="border rounded p-1"
            placeholder="Nhập MSSV"
          />
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              MSSV
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Họ và tên
            </th>
            <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Khoa
            </th>
            <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Xem chi tiết
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {student.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.name}
              </td>
              <td
                className="hidden md:table-cell
               px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {student.major}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => {
                    setOpenInfo(true);
                    setStudentInfo(student);
                  }}
                >
                  Xem thêm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
