import { Menu } from "../../organisms/Menu";

export const Sidebar = () => {
  return (
    <aside className="border-r-2 border-solid border-grayLight min-w-[260px] pt-4 pl-2 pr-4">
      <div className="min-h-[80px] mb-4 border-b-2 border-solid border-grayLight flex  items-center">
        <div className="ml-2">
          <h2>PlantWater - Logo</h2>
        </div>
      </div>
      <Menu />
    </aside>
  );
};
