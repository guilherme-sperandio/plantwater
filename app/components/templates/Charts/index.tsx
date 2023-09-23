"use client";

import { useCallback, useEffect, useState } from "react";
import { BarChart } from "../../organisms/BarChart";
import { LineChart } from "../../organisms/LineChart";
import { onValue, ref } from "firebase/database";
import { database } from "@/app/services/firebase";
import { monthsNames } from "@/app/helpers/months";

export interface IIrrigations {
  id: string;
  irrigationDate: Date;
  month: string;
}

export const Charts = () => {
  const [irrigations, setIrrigations] = useState<[] | Array<IIrrigations>>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(irrigations);

  useEffect(() => {
    try {
      setIsLoading(true);
      const starCountRef = ref(database, "irrigations");
      onValue(
        starCountRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            setIrrigations((old) => [
              ...old,
              {
                id: childKey,
                irrigationDate: new Date(childData.Ts),
                month: monthsNames[new Date(childData.Ts).getMonth()].name,
              },
            ]);
          });
        },
        {
          onlyOnce: true,
        }
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="mt-4">
      {!isLoading && (
        <>
          <div className="w-full h-[500px]  pt-4 pb-10 pr-2 border-2 border-solid border-grayLight rounded-lg">
            <h3 className="text-center text-base font-bold pb-4">
              Consumo de água por Mês
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
        </>
      )}
    </div>
  );
};
