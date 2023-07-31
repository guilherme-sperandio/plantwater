import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plantas | PlantWater",
  description: "Cadastre e Visualize suas plantas aqui",
};

export default function Plants() {
  return (
    <div className="mt-6 p-4 border-2 border-solid border-grayLight rounded-lg">
      <table className="w-[100%] border-collapse">
        <tr>
          <th className="text-left p-2 ">Planta</th>
          <th className="text-left p-2 ">% Umidade atual</th>
          <th className="text-left p-2 ">% mínima</th>
          <th className="text-left p-2 ">% maxima</th>
        </tr>
        <tr>
          <td className="text-left p-2 ">
            <Link href="/plants/editar/1">Murango</Link>
          </td>
          <td className="text-left p-2 ">10 %</td>
          <td className="text-left p-2 ">12 %</td>
          <td className="text-left p-2 ">40 %</td>
        </tr>
        <tr>
          <td className="text-left p-2 ">
            <Link href="/plants/editar/1">Murango</Link>
          </td>
          <td className="text-left p-2 ">10 %</td>
          <td className="text-left p-2 ">12 %</td>
          <td className="text-left p-2 ">40 %</td>
        </tr>
        <tr>
          <td className="text-left p-2 ">
            <Link href="/plants/editar/1">Murango</Link>
          </td>
          <td className="text-left p-2 ">10 %</td>
          <td className="text-left p-2 ">12 %</td>
          <td className="text-left p-2 ">40 %</td>
        </tr>
        <tr>
          <td className="text-left p-2 ">
            <Link href="/plants/editar/1">Murango</Link>
          </td>
          <td className="text-left p-2 ">10 %</td>
          <td className="text-left p-2 ">12 %</td>
          <td className="text-left p-2 ">40 %</td>
        </tr>
      </table>
    </div>
  );
}
