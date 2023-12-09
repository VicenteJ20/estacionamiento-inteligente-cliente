import React from 'react';

interface Locationsprops {
    id: string;
    area: string;
    registro: string;
    placa: string;
    acciones: string[];
}

const Locations: React.FC<Locationsprops> = ({ id, area, registro, placa, acciones }) => {
    return (
        <div className="grid grid-cols-5 border-2 border-slate-900 rounded-md my-2 p-2">
          <h1 id="text_id" className="font-bold text-lg col-span-1">Identificador</h1>
          <h1 id="text_area" className="font-bold text-lg col-span-1">Área</h1>
          <h1 id="text_uRegistro" className="font-bold text-lg col-span-1">Último registro</h1>
          <h1 id="text_placa" className="font-bold text-lg col-span-1">Placa asociada</h1>
          <h1 id="text_aRapidas" className="font-bold text-lg col-span-1">Acciones rapidas</h1>
            <h1 id={id} className="text-md col-span-1">
                {id}
            </h1>
            <h1 id="area" className="text-md col-span-1">
                {area}
            </h1>
            <h1 id="registro" className="text-md col-span-1">
                {registro}
            </h1>
            <h1 id="placa" className="text-md col-span-1">
                {placa}
            </h1>
            <div id="acciones" className="text-md col-span-1 flex">
                {acciones.map((accion, index) => (
                    <h1 key={index} className="mx-1" id={accion}>
                        {accion}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default Locations;
