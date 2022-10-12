import React, { useEffect } from 'react'
import { useState } from 'react';
import asistenciaApi from '../../api/asistenciaApi';
import { useAuthStore } from '../../hook/useAuthStore';

export const TablaHorarios = ({ horarios }) => {


    const { user } = useAuthStore();

    const [usuarioFind, setUsuarioFind] = useState(null);

    useEffect(() => {
        (async () => {
            const { data } = await asistenciaApi.get(`/usuario/${user.idUsuario}`);

            setUsuarioFind(data.usuario);
        })();
    }, [])

    console.log(usuarioFind);

    const horarioUsuario = [];

    horarios.map(horario => {
        if (horario.actividad.idUsuario == user.idUsuario) {
            horarioUsuario.push(horario);
        }
    })

    return (
        <div className="flex flex-col mt-3">
            <div className="overflow-x-auto">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
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
                                        Día
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
                                        Estado
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {horarioUsuario.map(({ idHorarioAsistencia, actividad, fechaAsistencia, hora_ingreso, hora_salida, estado }) => (
                                    <tr key={idHorarioAsistencia} className="bg-white border-b cursor-pointer">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{usuarioFind.dni}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {usuarioFind.nombre} {usuarioFind.apellido}
                                        </td>
                                        <td className="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {actividad.dia}
                                        </td>
                                        <td className="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {fechaAsistencia}
                                        </td>
                                        <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {hora_ingreso == null ? '--:--' : hora_ingreso}
                                        </td>
                                        <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {hora_salida == null ? '--:--' : hora_salida}
                                        </td>
                                        <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {estado == null ? 'Por definirse' : estado}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
