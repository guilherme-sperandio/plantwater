"use client";
import { push, ref, set } from "firebase/database";
import { database } from "@/app/services/firebase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "../../molecules/Input";
import { Button } from "../../atoms/Button";

interface IFormInput {
  name: string;
  minHumidity: number;
  maxHumidity: number;
}

export default function PlantForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();

  function handleSubmitForm(data: IFormInput) {
    const plantsListRef = ref(database, "plants");
    const newPlantRef = push(plantsListRef);
    set(newPlantRef, {
      name: data.name,
      minHumidity: Number(data.minHumidity),
      maxHumidity: Number(data.maxHumidity),
      lastIrrigation: "none",
      timeOfIrrigation: 0,
      currentHumidity: "none",
    });

    router.push("/plants");
  }

  return (
    <div className="pt-10">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          label="Nome da Planta"
          placeholder="Insira o nome da Planta"
          {...register("name")}
        />
        <div className="flex [&>div:first-child]:mr-4">
          <Input
            label="% Mínima de Humidade"
            type="number"
            min={0}
            max={100}
            placeholder="Insira a % mínima"
            {...register("minHumidity")}
          />
          <Input
            label="% Máxima de Humidade"
            type="number"
            min={0}
            max={100}
            placeholder="Insira a % mínima"
            {...register("maxHumidity")}
          />
        </div>
        <div className="mt-10 flex [&>button:first-child]:mr-4">
          <Button type="submit">Cadastrar</Button>
          <Button
            defaultColor={false}
            type="button"
            onClick={() => router.push("/plants")}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
