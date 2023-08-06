"use client";

import Link from "next/link";
import { Button } from "../../atoms/Button";
import { useRouter } from "next/navigation";
import { IPlants } from "@/app/plants/page";

interface TableProps {
  plants: Array<IPlants>;
}

export const Table = ({ plants }: TableProps) => {
  const router = useRouter();

  return (
    <div className="pt-5 ">
      <div className="flex justify-end">
        <Button onClick={() => router.push("/plants/new")}>
          Adicionar Planta
        </Button>
      </div>

      {plants.length > 0 ? (
        <div className="mt-6 p-4 border-2 border-solid border-grayLight rounded-lg">
          <table className="w-[100%] border-collapse">
            <thead>
              <tr className="border-b-2 border-solid border-grayLight">
                <th className="text-left p-2 ">Planta</th>
                <th className="text-center  p-2 ">% Umidade atual</th>
                <th className="text-center  p-2 ">% mínima</th>
                <th className="text-center p-2 ">% maxima</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr key={plant.id}>
                  <td className="text-left p-2 ">
                    <Link href={`/plants/editar/${plant.id}`}>
                      {plant.name}
                    </Link>
                  </td>
                  <td className="text-center p-2 ">
                    {plant.currentHumidity} %
                  </td>
                  <td className="text-center  p-2 ">{plant.minHumidity} %</td>
                  <td className="text-center p-2 ">{plant.maxHumidity} %</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-6 p-4">
          <h3>Nenhuma Planta foi cadastrada</h3>
        </div>
      )}
    </div>
  );
};
