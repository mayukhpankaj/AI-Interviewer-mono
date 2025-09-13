import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between  bg-white shadow-sm">
      <div className="flex items-center">
        <img src="/deeptrue.png" alt="Logo" className="h-8" />
        <span className=" ml-2 text-xl font-semibold"> &nbsp; Interview</span>
      </div>
    </nav>
  );
};