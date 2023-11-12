'use client'
import { BarChart, Bar, XAxis , YAxis, CartesianGrid, DefaultLegendContent, Tooltip, Legend } from "recharts";
//import { useState } from "react";




const  RechartsGrafico = () => {
    const datosEstacionamiento = [
        {
            fecha : "xx/xx/xx",
            total : "100"
        },
        {
            fecha : "xx/xx/xx",
            total : "150"
        },
        {
            fecha : "xx/xx/xx",
            total : "450"
        },
        {
            fecha : "xx/xx/xx",
            total : "200"
        },
        {
            fecha : "xx/xx/xx",
            total : "144"
        },
        {
            fecha : "xx/xx/xx",
            total : "230"
        }]
    
    return (
        <BarChart id="datosSemana" width={600} height={300} data={datosEstacionamiento}>
            <XAxis dataKey="fecha" />
            <YAxis/>
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" minPointSize={5} > </Bar>
            <CartesianGrid strokeDasharray="3 3"/>
        </BarChart>
    );
};

export default RechartsGrafico;