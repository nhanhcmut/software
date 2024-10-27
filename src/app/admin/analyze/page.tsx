import AccessTotal from "@/componentWeb/chart/AccessTotal";
import { ChartAnalyze } from "@/componentWeb/chart/Chart";
import { ListSell } from "@/componentWeb/chart/ListSell";
export default function Home() {
  return (
    <div className="flex gap-5 flex-col px-10 place-items-center">
      <div className="flex flex-col md:flex-row place-content-between gap-5">
        <ListSell />
        <AccessTotal />
      </div>
      <div className=" flex place-items-center">
        <ChartAnalyze />
      </div>
    </div>
  );
}
