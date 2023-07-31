export interface ITitles {
  [key: string]: {
    text: string;
  };
}

export interface ITexts extends ITitles {}

export const titles: ITitles = {
  "/dashboard": { text: "Dashboard" },
  "/plants": { text: "Plantas" },
};

export const texts: ITitles = {
  "/dashboard": { text: "Visualize os dados da sua plantação" },
  "/plants": { text: "Cadastre ou Edite uma planta" },
};
