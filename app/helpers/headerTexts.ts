export interface ITitles {
  [key: string]: {
    text: string;
  };
}

export interface ITexts extends ITitles {}

export const titles: ITitles = {
  "/dashboard": { text: "Dashboard" },
  "/plants": { text: "Plantas" },
  "/plants/new": { text: "Cadastrar" },
};

export const texts: ITitles = {
  "/dashboard": {
    text: "Visualize os dados do consumo de água em sua plantação",
  },
  "/plants": { text: "Cadastre ou Edite uma planta" },
  "/plants/new": { text: "Cadastre uma planta" },
};
