import React from 'react';

interface RecordProps {
  titulo: string;
  parrafo: string;
  icon: React.ReactNode;
  iconColorClass?: string;
}

const Record: React.FC<RecordProps> = ({ titulo, parrafo,icon, iconColorClass }) => {
  return (
    <div className="bg-white shadow-md border-inherit border-1.5 p-5 my-2 flex flex-wrap">
      <h1 id='Titulo' className="me-auto font-bold ">{titulo}</h1>
      <div className={`w-full md:w-auto ms-auto text-2xl ${iconColorClass}`}>{icon}</div>
      <p id='Parrafo' className="my-auto">{parrafo}</p>
    </div>
  );
};

export default Record;