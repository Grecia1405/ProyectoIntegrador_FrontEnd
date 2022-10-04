import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'

import { useAuthStore } from '../hook/useAuthStore'

import { ThreeCircles } from 'react-loader-spinner'
import { MainUsuario } from '../usuario/pages/MainUsuario'
import { MainAdmin } from '../admin/pages/MainAdmin'
import { Registro } from '../admin/usuarios/Registro'
import { Editar } from '../admin/usuarios/Editar'

import { FeriadoAdmin } from '../admin/pages/FeriadoAdmin'
import { RegistroFeriado } from '../admin/feriados/RegistroFeriado'
import { Editar as EditarF } from '../admin/feriados/Editar'

export const AppRouter = () => {

    const { user, status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === 'checking') {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#2563eb"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated' || user.actividad_usuario === '1')
                    ? (
                        <>
                            <Route path='/auth/*' element={<LoginPage />} />
                            <Route path='/*' element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    : (user.idArea === 1) ? (
                        <>
                            <Route path='/usuarios' element={<MainAdmin />} />
                            <Route path='/usuarios/registro' element={<Registro />} />
                            <Route path='/usuarios/editar/:id' element={<Editar />} />
                            <Route path='/*' element={<Navigate to="/usuarios" />} />

                            <Route path='/feriados' element={<FeriadoAdmin />} />
                            <Route path='/feriados/registro' element={<RegistroFeriado />} />
                            <Route path='/feriados/editar/:id' element={<EditarF />} />
                            <Route path='/*' element={<Navigate to="/feriados" />} />
                        </>
                    ) : (
                        <>
                            <Route path='/actividades' element={<MainUsuario />} />
                            <Route path='/*' element={<Navigate to="/actividades" />} />
                        </>
                    )

            }
        </Routes>
    )
}
