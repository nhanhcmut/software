import { StudentHistoryInterface } from "./interface/studenHistoryInterface";

export default function StudentInfo(studentHistory: StudentHistoryInterface) {
  return (
    <div className="absolute bg-blue-300 w-full items-center border-2 shadow-md rounded-md p-3">
      <h1 className="text-center text-xl text-white font-bold mb-4">
        Student History Information
      </h1>
      <div className="max-h-96  overflow-y-scroll">
        <table className="min-w-full  divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PrintName
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200  ">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {studentHistory.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.printName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {studentHistory.address}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex place-content-center mt-2">
        <button
          className="bg-red-500 w-10 hover:bg-red-700 text-white text-lg font-bold py-1 px-2 rounded"
          onClick={studentHistory.onClose}
        >
          X
        </button>
      </div>
    </div>
  );
}
