import React, { useState } from 'react'
import * as XLSX from 'xlsx';


export const RegistroActividadExcel = () => {

    //onChange inputs
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    //Submit
    const [excelData, setExcelData] = useState(null);

    const [dataConvert, setDataConvert] = useState(null);

    const handleFile = async (e) => {

        const selectedFile = e.target.files[0];

        const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];

        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                }
            } else {
                setExcelFileError('Por favor, seleccione un archivo excel.')
                setExcelFile(null);
            }
        } else {
            console.log('Por favor, seleccione un archivo');
        }
        /* setFileName(file.name);

        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
 */
        /* let arrayActividades = []

        jsonData.map(actividad => {

            const inicio = new Date((actividad.inicio_actividad - (25567 + 2)) * 86400 * 1000);
            const fin = new Date((actividad.fin_actividad - (25567 + 2)) * 86400 * 1000);

            const jsonActividad = {
                idUsuario: actividad.idUsuario,
                dia: actividad.dia,
                ingreso_actividad: actividad.ingreso_actividad,
                salida_actividad: actividad.salida_actividad,
                inicio_actividad: inicio,
                fin_actividad: fin
            }

            arrayActividades.push(jsonActividad);
        });


        console.log(arrayActividades); */
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);

            /* Conversión de fechas y hora */

            let arrayActividades = []

            excelData.map(({ idUsuario, dia, ingreso_actividad, salida_actividad, inicio_actividad, fin_actividad }) => {

                const inicio = new Date((inicio_actividad - (25567 + 2)) * 86400 * 1000).toISOString();
                const inicio_split = inicio.split("T");
                const fecha_inicio = inicio_split[0];
                console.log(fecha_inicio);

                const fin = new Date((fin_actividad - (25567 + 2)) * 86400 * 1000).toISOString();
                const fin_split = fin.split("T");
                const fecha_fin = fin_split[0];
                console.log(fecha_fin);


                const jsonActividad = {
                    idUsuario,
                    dia,
                    ingreso_actividad,
                    salida_actividad,
                    inicio_actividad: fecha_inicio,
                    fin_actividad: fecha_fin
                }

                arrayActividades.push(jsonActividad);
            });

            setDataConvert(arrayActividades);

        } else {
            setExcelFileError('Por favor, seleccione un archivo.')
            setExcelData(null);
        }
    }

    /* console.log(dataConvert); */

    return (
        <div className='mt-4 mb-12'>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFile}></input>
                <button type='submit' className='px-5 py-2 bg-blue-600 ml-11 text-white rounded-md'>Cargar</button>
            </form>

            {
                excelFileError && (
                    <p className='text-red-500'>{excelFileError}</p>
                )
            }

        </div>
    )
}
