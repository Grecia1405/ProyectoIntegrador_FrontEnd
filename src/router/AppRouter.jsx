import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'

import { useAuthStore } from '../hook/useAuthStore'

import { ThreeCircles } from 'react-loader-spinner'
import { MainUsuario } from '../usuario/pages/MainUsuario'
import { MainAdmin } from '../admin/pages/MainAdmin'


export const AppRouter = () => {

    const { user, status, checkAuthToken } = useAuthStore();

    console.log(user);

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


    /* const authStatus = 'not-authenticated' */

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path='/auth/*' element={<LoginPage />} />
                            <Route path='/*' element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    : (user.idArea === 1) ? (
                        <>
                            <Route path='/usuarios' element={<MainAdmin />} />
                            <Route path='/*' element={<Navigate to="/usuarios" />} />
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
