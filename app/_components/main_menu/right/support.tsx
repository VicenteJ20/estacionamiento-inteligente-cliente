"use client"
import React, { useState } from 'react';

interface SupportProps {
  title: string;
  icon: React.ReactNode;
  onClickRedirectUrl?: string;
}

const Support: React.FC<SupportProps> = ({ title, icon, onClickRedirectUrl }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Realizar la redirección si se proporciona una URL
    if (onClickRedirectUrl) {
      window.location.href = onClickRedirectUrl;
    }

    // Revertir el estado después de 500 milisegundos (puedes ajustar el tiempo según tus necesidades)
    setTimeout(() => {
      setClicked(false);
    }, 500);
  };

  return (
    <div
      className={`bg-white shadow-md border-inherit border-1.5 p-5 my-2 flex flex-wrap cursor-pointer ${
        clicked ? 'bg-blue-200 text-white' : 'border-inherit'
      }`}
      onClick={handleClick}
    >
      <h1 className="w-full md:w-auto me-auto md:me-0 font-bold mb-2 md:mb-0">{title}</h1>
      <div className={`w-full md:w-auto ms-auto text-2xl`}>{icon}</div>
    </div>
  );
};

export default Support;
