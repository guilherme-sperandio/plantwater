import { BarChart } from "../../organisms/BarChart";
import { LineChart } from "../../organisms/LineChart";

export const Charts = () => {
  return (
    <div className="mt-4">
      <div className="w-full h-[500px]  pt-4 pb-10 pr-2 border-2 border-solid border-grayLight rounded-lg">
        <h3 className="text-center text-base font-bold pb-4">
          Consumo de água Anual
        </h3>
        <LineChart />
      </div>
      <div className="flex justify-between mt-12">
        <div className="w-[49%] h-[500px]  pt-4 pb-10 pr-2 border-2 border-solid border-grayLight rounded-lg">
          <h3 className="text-center text-base font-bold pb-4">
            Consumo de água no dia
          </h3>
          <LineChart />
        </div>
        <div className="w-[49%] h-[500px]  pt-4 pb-10 pr-2 border-2 border-solid border-grayLight rounded-lg">
          <h3 className="text-center text-base font-bold pb-4">
            Período de maior consumo
          </h3>
          <BarChart />
        </div>
      </div>
    </div>
  );
};
