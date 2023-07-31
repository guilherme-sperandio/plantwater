import { Metadata } from "next";
import { Charts } from "../components/templates/Charts";

export const metadata: Metadata = {
  title: "Dashboard | PlantWater",
  description: "Análise os dados do consumo de água",
};

export default function Dashboard() {
  return <Charts />;
}
