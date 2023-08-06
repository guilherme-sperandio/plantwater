import PlantForm from "@/app/components/templates/Form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Plantas | PlantWater",
  description: "Cadastre uma nova planta",
};

export default function NewPlant() {
  return <PlantForm />;
}
