import { FC } from "react";
import { Outlet } from "react-router-dom";

const LayoutOutlet: FC = () => {
  return (
    <div className='relative bg-[url("./assets/images/endscr.png")] bg-cover w-dvw h-dvh'>
      <Outlet />
    </div>
  );
};

export default LayoutOutlet;
