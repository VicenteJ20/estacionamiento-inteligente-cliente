

const TarjetaDeUso = () => {

    const datosTarjeta = [
        {
            ultima_horaEntrada: "XX:XX",
            ultima_horaSalida: "XX:XX",
            totalRegistros: "XXX",
            registro1: 1,
            registro2: 2,
            registro3: 3,
        }
    ]

    return (
        <div id="tarjetaUso" className=" grid grid-cols-5 gap-3 max-w-4xl m-5  /*bg-slate-500*/ h-1/4 z-0 text-lg items-center ">
            <div className="/*bg-green-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p> Última entrada:</p> {datosTarjeta[0].ultima_horaEntrada}</div>
            <div className="/*bg-red-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p> Última salida:</p> {datosTarjeta[0].ultima_horaSalida}</div>
            <div className="/*bg-blue-500*/ col-1 text-center border-1 border-gray-300 rounded-lg"> <p>Registros totales:</p> {datosTarjeta[0].totalRegistros}</div>
            <div className="/*bg-cyan-500*/ col-2 col-span-2 content-center border-1 border-gray-300 rounded-lg">

                <div className="grid grid-rows-2">
                <div className="row-1 text-center"> Registros por área:  </div>
                <div className="row-1 text-center"> <p>{datosTarjeta[0].registro1} / {datosTarjeta[0].registro2} / {datosTarjeta[0].registro3}</p>  </div>

                </div>
            </div>
        </div>
    );
};



export default TarjetaDeUso;