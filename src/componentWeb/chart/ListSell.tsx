export function ListSell() {
  return (
    <div className="bg-yellow-100  p-5 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Thống kê trong ngày</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-3">
        <div className="bg-red-200 p-5 rounded-lg shadow-lg">
          <div className="">
            <h1 className=" font-bold">{10000000} vnd</h1>
            <p className="text-sm">Doanh thu</p>
            <p className="text-sm text-blue-400">+10% so với hôm qua</p>
          </div>
        </div>
        <div className="bg-yellow-200 p-5 rounded-lg shadow-lg">
          <div className="">
            <h1 className=" font-bold">{10000000} vnd</h1>
            <p className="text-sm">Doanh thu</p>
            <p className="text-sm text-blue-400">+10% so với hôm qua</p>
          </div>
        </div>
        <div className="bg-green-200 p-5 rounded-lg shadow-lg">
          <div className="">
            <h1 className=" font-bold">{10000000} vnd</h1>
            <p className="text-sm">Doanh thu</p>
            <p className="text-sm text-blue-400">+10% so với hôm qua</p>
          </div>
        </div>
        <div className="bg-purple-200 p-5 rounded-lg shadow-lg">
          <div className="">
            <h1 className=" font-bold">{10000000} vnd</h1>
            <p className="text-sm">Doanh thu</p>
            <p className="text-sm text-blue-400">+10% so với hôm qua</p>
          </div>
        </div>
      </div>
    </div>
  );
}
