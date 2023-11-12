import React, { useState, useEffect } from "react";
import { } from "./sensores.json"

const TablaSensores = () => {

    const sensores = [{"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/14/2023T171002"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/12/2023T124022"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/07/2023T003830"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/04/2023T172557"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/21/2023T213343"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/11/2023T123050"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/11/2023T142802"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/01/2023T191815"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/04/2023T104543"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/24/2023T000814"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/12/2023T184842"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/20/2023T195039"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/19/2023T091359"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/04/2023T025913"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/01/2023T200239"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/18/2023T202725"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/04/2023T123126"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/09/2023T194930"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/09/2023T103505"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/03/2023T204123"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/14/2023T183634"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/16/2023T003500"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/08/2023T005654"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/17/2023T174551"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/13/2023T144947"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/12/2023T013904"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/16/2023T005800"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/20/2023T063640"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/15/2023T063949"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/05/2023T105910"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/15/2023T145822"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/19/2023T011106"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/15/2023T081742"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/06/2023T105914"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/11/2023T112404"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/07/2023T093050"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/06/2023T064842"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/24/2023T010154"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/15/2023T091744"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/03/2023T194344"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/01/2023T174522"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/16/2023T095701"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/05/2023T220825"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/13/2023T071711"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/20/2023T093942"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/16/2023T100031"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/11/2023T095819"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/22/2023T203524"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/08/2023T024610"},
    {"_id":"asdasdads","id":"SN001","status":"T","insertedAt":"11/19/2023T202614"}]

    return (
        <div className="h-1/3">
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {sensores.map((sensor, index) => (
                        <tr key={index}>
                            <td>{sensor._id}</td>
                            <td>{sensor.id}</td>
                            <td>{sensor.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaSensores;