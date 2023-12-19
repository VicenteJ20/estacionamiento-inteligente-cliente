import React from 'react';
import { IconType } from 'react-icons';
import { ParkingPlaceSelector } from '../../dashboard/areas/ParkingPlaceSelector';


interface Sede {
    icon: React.ReactNode;
    sede: string;
}

const Sede: React.FC<Sede> = ({ icon, sede }) => {
    return (
        // <div className="flex my-5">
        //     <div className="font-bold mx-2 text-green-500 text-3xl">{icon}</div>
        //     <h1 id="sede" className="mx-2 text-2xl">
        //         {sede}
        //     </h1>
        // </div>
        <ParkingPlaceSelector />
    );
};

export default Sede;
