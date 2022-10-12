import React, { useState, useEffect } from 'react'
import asistenciaApi from '../../api/asistenciaApi';
import { Sidebar } from '../components/Sidebar'
import { TablaHorarios } from '../components/TablaHorarios';

export const MainUsuario = () => {

    const [horarios, setHorarios] = useState([]);

    const listarHorarios = async () => {
        const { data } = await asistenciaApi.get('horario/');
        setHorarios(data.horario_asistencia_All);
    }

    useEffect(() => {
        listarHorarios();
    }, [])


    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full p-5 bg-gray-100'>
                <div className='bg-white rounded-lg p-2 h-full shadow-xl'>
                    <h2 className='text-center text-3xl font-semibold my-8 uppercase'>Lista de horarios</h2>
                    <TablaHorarios horarios={horarios} />
                </div>
            </div>
        </div>
    )
}
