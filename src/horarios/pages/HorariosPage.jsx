import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom'
import asistenciaApi from '../../api/asistenciaApi';

export const HorariosPage = () => {

    const navigate = useNavigate();

    const [horarios, setHorarios] = useState([]);
    const [actividades, setActividades] = useState([]);

    const listarHorarios = async () => {
        const { data } = await asistenciaApi.get('horario/');
        setHorarios(data.horario_asistencia_All);
    }

    useEffect(() => {
        listarHorarios();
    }, [])

    const listarActividades = async () => {
        const { data } = await asistenciaApi.get('actividad/');
        setActividades(data.actividades_All);
    }

    useEffect(() => {
        listarActividades();
    }, [])

    let listadoHorarios = [];
    let horariosDiaActual = [];

    const fechaActual = format(new Date(), 'yyyy-MM-dd');

    actividades.map(actividad => {
        horarios.map(horario => {
            if (actividad.idActividad === horario.actividad.idActividad) {
                listadoHorarios.push({
                    idHorarioAsistencia: horario.idHorarioAsistencia,
                    dni: actividad.usuario.dni,
                    nombre: actividad.usuario.nombre,
                    apellido: actividad.usuario.apellido,
                    fecha: horario.fechaAsistencia,
                    ingreso: actividad.ingreso_actividad,
                    salida: actividad.salida_actividad,
                    estado: horario.idEstado
                })
            }
        })
    })

    listadoHorarios.map(horarioDia => {
        if (horarioDia.fecha == fechaActual) {
            horariosDiaActual.push(horarioDia);
        }
    })

    return (

        <>
            <div className='flex justify-end mt-8 mr-24'>
                <Link to="/auth/login" className='px-3 py-2 rounded-xl text-white bg-green-600'>Iniciar sesión</Link>
            </div>
            <div className='w-full p-5 '>
                <h2 className='text-center text-3xl font-semibold my-2 uppercase'>Listado de horarios</h2>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto flex justify-center">
                    <div className="py-4 inline-block w-7/12 sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-lg">
                            <table className="min-w-full text-left rounded-lg">
                                <thead className="border-b bg-blue-600">
                                    <tr>
                                        <th scope="col" className="text-sm text-center font-medium text-white px-6 py-4">
                                            DNI
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Nombre completo
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Fecha
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-white px-6 py-4">
                                            Ingreso
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-white px-6 py-4">
                                            Salida
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-white px-6 py-4">
                                            Marcar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {horariosDiaActual.map(({ idHorarioAsistencia, dni, nombre, apellido, fecha, ingreso, salida, estado }) => (
                                        <tr onClick={() => { console.log(idHorarioAsistencia) }} key={idHorarioAsistencia} className="bg-white border-b cursor-pointer">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{dni}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {nombre} {apellido}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {fecha}
                                            </td>
                                            <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {ingreso}
                                            </td>
                                            <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {salida}
                                            </td>
                                            <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => navigate(`/horario/ingreso/${idHorarioAsistencia}`)} className={`p-2 bg-green-600 text-white font-semibold rounded-md mr-2 ${estado != null ? 'invisible' : ''} `}>Ingreso</button>
                                                <button onClick={() => navigate(`/horario/salida/${idHorarioAsistencia}`)} className='p-2 bg-green-600 text-white font-semibold rounded-md'>Salida</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
