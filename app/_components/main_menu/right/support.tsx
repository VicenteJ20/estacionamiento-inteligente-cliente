import React from 'react';

interface SupportProps {
  title: string;
  icon: React.ReactNode;
  iconColorClass?: string; // Propiedad opcional para la clase de color del ícono
}

const Support: React.FC<SupportProps> = ({ title, icon, iconColorClass }) => {
  return (
    <div className="border-2 border-slate-900 rounded-md p-5 my-2 flex flex-wrap">
      <h1 id="title" className="w-full md:w-auto me-auto md:me-0 font-bold mb-2 md:mb-0">{title}</h1>
      <div className={`w-full md:w-auto ms-auto text-2xl ${iconColorClass}`}>{icon}</div>
    </div>
  );
};

export default Support;
