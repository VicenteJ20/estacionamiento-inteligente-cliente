"use client"
import React, { useState, useEffect } from "react";

async function fetchData(id: string, status: string) {
  // Simulación de una operación asíncrona, puedes reemplazarla con tu lógica real
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      // Obtener el área del id para asignar el color
      const area = id.substring(0, 3);
  

      // Asignar color basado en los primeros tres caracteres del id
      let colorClass = "";

      if (area === "asE") {
        colorClass = "blue";
      } else if (area === "asA") {
        colorClass = "red";
      } else if (area === "asD") {
        colorClass = "yellow";
      } else if (area === "asV") {
        colorClass = "green";
      } else if (area === "asM") {
        colorClass = "gray";
      }

      // Asignar intensidad basada en el status
      let intensityClass = "";
      if (status === "F") {
        intensityClass = "200";
      } else if (status === "T") {
        intensityClass = "500";
      } else if (status === "I") {
        colorClass = "gray"; intensityClass = "950";
      }

      // Construir la clase final
      const className = `bg-${colorClass}-${intensityClass} h-5 w-5`;

      // Resolver la promesa con la clase final
      resolve(className);
    }, 1000); // Simulando una operación asíncrona que demora 1 segundo
  });
}

function CarDiv({ id, status }: { id: string; status: string }) {
  const [className, setClassName] = useState("bg-gray-950 h-5 w-5");

  useEffect(() => {
    // Utilizar una función interna asíncrona en useEffect
    const fetchDataAsync = async () => {
      const result = await fetchData(id, status);
      setClassName(result);
    };

    // Llamar a la función asíncrona interna
    fetchDataAsync();
  }, [id, status]);

  return (
    <div key={id} className={className}>
      {/* Additional content goes here */}
    </div>
  );
}

export default CarDiv;
