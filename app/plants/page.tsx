import { Metadata } from "next";
import { Table } from "../components/templates/Table";

export const metadata: Metadata = {
  title: "Plantas | PlantWater",
  description: "Cadastre e Visualize suas plantas aqui",
};

export interface IPlants {
  id: string;
  name: string;
  maxHumidity: number;
  minHumidity: number;
  lastIrrigation: string;
  timeOfIrrigation: number;
  currentHumidity: string;
}

export default function Plants() {
  return <Table />;
}
