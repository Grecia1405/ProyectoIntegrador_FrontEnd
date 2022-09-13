import React from 'react'
import { Sidebar } from '../components/Sidebar'

export const MainUsuario = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full h-screen p-5 bg-gray-100'>
                <div className='bg-white rounded-lg p-2 h-full shadow-xl'>
                    <h2 className='text-center text-3xl font-semibold my-8 uppercase'>Lista de actividades</h2>
                </div>
            </div>
        </div>
    )
}
