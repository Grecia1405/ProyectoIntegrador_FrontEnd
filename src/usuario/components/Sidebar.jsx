import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../hook/useAuthStore';


export const Sidebar = () => {

    const { startLogout, user } = useAuthStore();

    const [navBar, setNavBar] = useState(true);
    const [buttonPos, setButtonPos] = useState(true);

    const toggleButton = () => {
        setNavBar(!navBar);
        setButtonPos(!buttonPos);
    }

    /* console.log(user); */

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
                                <a href="#" className="flex items-center p-2 rounded-lg transition duration-500 hover:bg-blue-800">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                                    <span className="ml-4">Actividades</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 rounded-lg transition duration-500 hover:bg-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="ml-3">Configuración</span>
                                </a>
                            </li>
                            <li>
                                <button onClick={startLogout} href="#" className="w-full flex items-center p-2 rounded-lg transition duration-500 hover:bg-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                    </svg>
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