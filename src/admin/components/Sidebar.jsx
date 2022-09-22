import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hook/useAuthStore';


export const Sidebar = () => {

    const { startLogout, user } = useAuthStore();

    const [navBar, setNavBar] = useState(true);
    const [buttonPos, setButtonPos] = useState(true);

    const toggleButton = () => {
        setNavBar(!navBar);
        setButtonPos(!buttonPos);
    }

    console.log(user);

    return (
        <div className='mr-0 lg:mr-64'>
            <div className="fixed">
                <aside className={`w-64 ${navBar ? '' : '-ml-64'} duration-700 text-white `} aria-label="Sidebar">
                    <div className="h-screen w-64 absolute bg-blue-700"></div>
                    <div className="h-screen overflow-y-auto py-4 px-3 relative">
                        <h1 className="text-center text-3xl mb-6 font-bold uppercase ">Asistenciapp</h1>
                        <ul className="space-y-2">
                            <li>
                                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
                                    className="w-36 mx-auto"
                                />
                                <div className="flex justify-center mt-3">
                                    <span className="font-bold text-center">{user.nombre}</span>
                                </div>
                            </li>
                        </ul>
                        <ul className="pt-4 mt-4 space-y-2 border-t-2 border-white font-normal">
                            <li>
                                <Link to="/usuarios" className="flex items-center p-2 rounded-lg transition duration-500 hover:bg-blue-800">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
                                    <span className="ml-4">Usuarios</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 rounded-lg transition duration-500 hover:bg-blue-800">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                                    <span className="ml-3">Actividades</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 rounded-lg transition duration-500 hover:bg-blue-800">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                    <span className="ml-3">Feriados</span>
                                </a>
                            </li>
                            <li>
                                <button onClick={startLogout} href="#" className="w-full flex items-center p-2 rounded-lg transition duration-500 hover:bg-blue-800">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-3">Cerrar sesión</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
                <button onClick={toggleButton} className={`lg:hidden px-2 py-1 bg-red-500 rounded-sm absolute top-0 ${buttonPos ? 'ml-64' : 'ml-0'} duration-700`}>HH</button>
            </div>
        </div>
    )
}