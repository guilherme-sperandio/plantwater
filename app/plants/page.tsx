"use client";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import { Table } from "../components/templates/Table";
import { child, onValue, ref } from "firebase/database";
import { database } from "../services/firebase";

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
  const [plants, setPlants] = useState<[] | Array<IPlants>>([]);

  useEffect(() => {
    const starCountRef = ref(database, "plants");
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          setPlants((old) => [
            ...old,
            {
              id: childKey,
              name: childData.name,
              maxHumidity: childData.maxHumidity,
              minHumidity: childData.minHumidity,
              lastIrrigation: childData.lastIrrigation,
              timeOfIrrigation: childData.timeOfIrrigation,
              currentHumidity: childData.currentHumidity,
            },
          ]);
        });
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  return <Table plants={plants} />;
}
