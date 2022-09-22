
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAuthStore } from '../../hook/useAuthStore'
import { useForm } from '../../hook/useForm'
import { useUsuarioStore } from '../../hook/useUsuarioStore'

const registerForm = {
    nombre: '',
    apellido: '',
    fec_nacimiento: '',
    dni: '',
    email: '',
    password: '',
    tipo: '',
    tarifa_hora: '',
    idArea: ''
}

export const RegistroFormulario = () => {

    const { user } = useAuthStore();

    const { startSavingUser, errorMessage } = useUsuarioStore();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const { nombre, apellido, fec_nacimiento, dni, email, password, tipo, tarifa_hora, idArea, onInputChange, onResetForm } = useForm(registerForm)

    const registroSubmit = async (e) => {

        /* TODO: Validaciones pendientes */
        e.preventDefault();

        if (!nombre || !apellido || !fec_nacimiento || !dni || !email || !password || !tipo || !tarifa_hora || !idArea) {
            setError(true);
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setError(false);
                setMensaje('');
            }, 3000)
            return;
        } else if (nombre.trim().length < 2 || apellido.trim().length < 2) {
            setError(true);
            setMensaje('El nombre y apellido deben tener 2 a más caracteres');
            setTimeout(() => {
                setError(false);
                setMensaje('');
            }, 3000)
            return;
        } else if (dni.trim().length != 8) {
            setError(true);
            setMensaje('El dni debe tener 8 caracteres');
            setTimeout(() => {
                setError(false);
                setMensaje('');
            }, 3000)
            return;
        } else {
            startSavingUser({
                nombre: nombre, apellido: apellido,
                fec_nacimiento: fec_nacimiento, dni: dni,
                email: email, password: password,
                tipo: tipo, tarifa_hora: tarifa_hora, idArea: idArea,
                createdByUser: user.idUsuario
            });

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000)

            onResetForm();

        }


    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            setError(true);
        }

        setTimeout(() => {
            setError(false);
        }, 3000)

    }, [errorMessage])


    return (
        <>
            <section className="w-5/6 p-6 mx-auto bg-white rounded-md">
                <form onSubmit={registroSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-800">Nombre</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="nombre"
                                value={nombre}
                                onChange={onInputChange}
                                autoComplete="false"
                            />
                        </div>

                        <div>
                            <label className="text-gray-800">Apellido</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="apellido"
                                value={apellido}
                                onChange={onInputChange}
                                autoComplete="false"
                            />
                        </div>

                        <div>
                            <label className="text-gray-800">Fecha de nacimiento</label>
                            <input type="date" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="fec_nacimiento"
                                value={fec_nacimiento}
                                onChange={onInputChange}
                            />
                        </div>

                        <div>
                            <label className="text-gray-800">DNI</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="dni"
                                value={dni}
                                onChange={onInputChange}
                            />
                        </div>

                        <div>
                            <label className="text-gray-800">Email</label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                autoComplete="false"
                            />
                        </div>

                        <div>
                            <label className="text-gray-800">Password</label>
                            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="password"
                                value={password}
                                onChange={onInputChange}
                                autoComplete="false"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">

                        <div>
                            <label className="text-gray-800">Tipo</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="tipo"
                                value={tipo}
                                onChange={onInputChange}
                            />
                        </div>

                        <div>
                            <label className="text-gray-800">Tarifa</label>
                            <input type="number" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="tarifa_hora"
                                value={tarifa_hora}
                                onChange={onInputChange}
                            />
                        </div>

                        <div>
                            <label className="text-gray-800">Área</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40-300 focus:outline-none focus:ring"
                                name="idArea"
                                value={idArea}
                                onChange={onInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600">Guardar</button>
                    </div>

                    {error
                        && <div className="mt-4 flex p-4 bg-red-100 rounded-md border-t-4 border-red-500 dark:bg-red-200" role="alert">
                            <svg className="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <div className="ml-3 text-sm font-medium text-red-700">
                                {mensaje}
                            </div>
                        </div>
                    }

                    {success
                        && <div className="mt-4 flex p-4 bg-green-100 rounded-md border-t-4 border-green-500 dark:bg-green-200" role="alert">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <div className="ml-3 text-sm font-medium text-green-700">
                                El usuario fue creado exitosamente.
                            </div>
                        </div>
                    }
                </form>
            </section>
        </>
    )
}
