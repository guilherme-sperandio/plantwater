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
  const [totalMlPerMonth, setTotalMlPerMonth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const filterByHour = useCallback(
    (hour: number) => {
      var total = 0;
      irrigations.map((irrigation) => {
        if (irrigation.irrigationDate.getHours() === hour) {
          total = total + 67;
        }
      });
      return total;
    },
    [irrigations]
  );

  const filterByPeriod = useCallback(
    (period: string) => {
      var total = 0;
      if (period === "manha") {
        irrigations.map((irrigation) => {
          if (
            irrigation.irrigationDate.getHours() >= 6 &&
            irrigation.irrigationDate.getHours() < 12
          ) {
            total = total + 67;
          }
        });
        return total;
      }
      if (period === "tarde") {
        irrigations.map((irrigation) => {
          if (
            irrigation.irrigationDate.getHours() >= 12 &&
            irrigation.irrigationDate.getHours() < 18
          ) {
            total = total + 67;
          }
        });
        return total;
      } else {
        irrigations.map((irrigation) => {
          if (irrigation.irrigationDate.getHours() >= 18) {
            total = total + 67;
          }
        });
        return total;
      }
    },
    [irrigations]
  );

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
            setTotalMlPerMonth((oldState) => {
              return oldState + 67;
            });

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
            <LineChart
              data={[
                {
                  name: "Janeiro",
                  ml: 0,
                },
                {
                  name: "Fevereiro",
                  ml: 0,
                },
                {
                  name: "Março",
                  ml: 0,
                },
                {
                  name: "Abril",
                  ml: 0,
                },
                {
                  name: "Maio",
                  ml: 0,
                },
                {
                  name: "Junho",
                  ml: 0,
                },
                {
                  name: "Julho",
                  ml: 0,
                },
                {
                  name: "Agosto",
                  ml: 0,
                },
                {
                  name: "Setembro",
                  ml: totalMlPerMonth,
                },
                {
                  name: "Outubro",
                  ml: 0,
                },
                {
                  name: "Novembro",
                  ml: 0,
                },
                {
                  name: "Dezembro",
                  ml: 0,
                },
              ]}
            />
          </div>
          <div className="flex justify-between mt-12">
            <div className="w-[49%] h-[500px]  pt-4 pb-10 pr-2 border-2 border-solid border-grayLight rounded-lg">
              <h3 className="text-center text-base font-bold pb-4">
                Consumo de água por hora
              </h3>
              <LineChart
                data={[
                  {
                    name: "00",
                    ml: filterByHour(0),
                  },
                  {
                    name: "01",
                    ml: filterByHour(1),
                  },
                  {
                    name: "02",
                    ml: filterByHour(2),
                  },
                  {
                    name: "03",
                    ml: filterByHour(3),
                  },
                  {
                    name: "04",
                    ml: filterByHour(4),
                  },
                  {
                    name: "05",
                    ml: filterByHour(5),
                  },
                  {
                    name: "06",
                    ml: filterByHour(6),
                  },
                  {
                    name: "07",
                    ml: filterByHour(7),
                  },
                  {
                    name: "08",
                    ml: filterByHour(8),
                  },
                  {
                    name: "09",
                    ml: filterByHour(9),
                  },
                  {
                    name: "10",
                    ml: filterByHour(10),
                  },
                  {
                    name: "11",
                    ml: filterByHour(11),
                  },
                  {
                    name: "12",
                    ml: filterByHour(12),
                  },
                  {
                    name: "13",
                    ml: filterByHour(13),
                  },
                  {
                    name: "14",
                    ml: filterByHour(14),
                  },
                  {
                    name: "15",
                    ml: filterByHour(15),
                  },
                  {
                    name: "16",
                    ml: filterByHour(16),
                  },
                  {
                    name: "17",
                    ml: filterByHour(17),
                  },
                  {
                    name: "18",
                    ml: filterByHour(18),
                  },
                  {
                    name: "19",
                    ml: filterByHour(19),
                  },
                  {
                    name: "20",
                    ml: filterByHour(20),
                  },
                  {
                    name: "21",
                    ml: filterByHour(21),
                  },
                  {
                    name: "22",
                    ml: filterByHour(22),
                  },
                  {
                    name: "23",
                    ml: filterByHour(23),
                  },
                ]}
              />
            </div>
            <div className="w-[49%] h-[500px]  pt-4 pb-10 pr-2 border-2 border-solid border-grayLight rounded-lg">
              <h3 className="text-center text-base font-bold pb-4">
                Período de maior consumo
              </h3>
              <BarChart
                data={[
                  {
                    name: "Manhã",
                    ml: filterByPeriod("manha"),
                  },
                  {
                    name: "Tarde",
                    ml: filterByPeriod("tarde"),
                  },
                  {
                    name: "Noite",
                    ml: filterByPeriod("noite"),
                  },
                ]}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
