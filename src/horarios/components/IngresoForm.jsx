import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import asistenciaApi from "../../api/asistenciaApi";
import { useForm } from "../../hook/useForm";

const horarioFormFields = {
    horarioEmail: '',
    horarioPassword: '',
}

export const IngresoForm = () => {

    const { id } = useParams();

    const [horarioFind, setHorarioFind] = useState(null);
    const [usuarioFind, setUsuarioFind] = useState({});

    useEffect(() => {
        (async () => {
            const { data } = await asistenciaApi.get(`/horario/${id}`);
            setHorarioFind(data.horario);
            const { data: data2 } = await asistenciaApi.get(`/usuario/${data.horario.idUsuario}`);
            setUsuarioFind(data2.usuario)
        })();
    }, [id])

    const h1 = useRef();
    const ti = () => {
        let fechahora = new Date();
        let hora = fechahora.getHours();
        let minuto = fechahora.getMinutes();
        let segundo = fechahora.getSeconds();
        let minutoFormat;
        let segundoFormat;

        if (minuto < 10) {
            minutoFormat = `0${minuto}`
        } else {
            minutoFormat = minuto;
        }
        if (segundo < 10) {
            segundoFormat = `0${segundo}`
        } else {
            segundoFormat = segundo;
        }
        return `${hora}:${minutoFormat}:${segundoFormat}`;
    };
    useEffect(() => {
        const cl = setInterval(() => {
            h1.current.innerHTML = `${ti()}`;
        }, 1000);
        return () => clearInterval(cl);
    }, []);

    /* const handleGetTime = () => {
        const tiempo = ti();

        console.log(tiempo);
    } */

    const { horarioPassword, onInputChange } = useForm(horarioFormFields);

    const marcadoHorarioSubmit = (e) => {
        e.preventDefault();
        const marcado_inicio = ti();
        console.log({ email: usuarioFind.email, password: horarioPassword, hora_ingreso: marcado_inicio, horarioFind: horarioFind.idHorarioAsistencia });
    }

    return (

        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">

            <div className='my-8 mr-60'>
                <Link to="/horarios" className='px-3 py-2 rounded-xl text-white bg-green-600'>Volver a listado</Link>
            </div>

            <div className=" bg-pink-600 flex justify-center w-96 py-3 rounded-xl mb-3">
                <h1 className="text-4xl text-white" ref={h1}>{ti()}</h1>
            </div>

            <div className='relative w-5/6 md:w-3/6 lg:w-2/6 xl:w-96 border p-5 rounded-xl bg-white'>

                <div className='text-center mt-5 mb-10 flex justify-center'>
                    <h2 className='text-2xl uppercase font-extrabold'>Marcado de asistencia</h2>
                </div>
                <form onSubmit={marcadoHorarioSubmit} className="px-3">
                    <div className='mb-8'>
                        <label className='block text-sm mb-2 font-semibold'>Email</label>
                        <input className="w-full text-sm py-1 border-b-2 border-gray-600 transition-colors duration-500 focus:outline-none focus:border-blue-600"
                            type="email"
                            name="horarioEmail"
                            value={usuarioFind.email}
                            disabled={true}
                            onChange={onInputChange}
                            autoComplete="false"
                        />
                    </div>
                    <div className='mb-8'>
                        <label className='block text-sm mb-2 font-semibold'>Password</label>
                        <input className="w-full text-sm py-1 border-b-2 border-gray-600 transition-colors duration-500 focus:outline-none focus:border-blue-600"
                            type="password"
                            name="horarioPassword"
                            value={horarioPassword}
                            onChange={onInputChange}
                            autoComplete="false"
                        />
                    </div>

                    {/* {error
                            && <div className="flex p-4 mb-4 bg-red-100 rounded-md border-t-4 border-red-500 dark:bg-red-200" role="alert">
                                <svg className="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <div className="ml-3 text-sm font-medium text-red-700">
                                    Las credenciales ingresadas son incorrectas
                                </div>
                            </div>
                        } */}

                    <button className='w-full text-center text-white text-lg font-bold p-3 rounded-xl mb-3 duration-500 bg-blue-600 hover:bg-blue-700'
                        type='submit'>
                        Marcar asistencia
                    </button>

                </form>
            </div>
        </div>

    );
}