import { addDays, eachDayOfInterval, format, isMonday } from 'date-fns';
import asistenciaApi from '../api/asistenciaApi';
import { actividadDia } from '../helpers/actividadDia';

export const useActividadStore = () => {

    const startSavingActividad = async (formulario) => {

        const { idActividad, idUsuario, dia, ingreso_actividad, salida_actividad, inicio_actividad, fin_actividad } = formulario;

        const { data } = await asistenciaApi.post('/actividad/crear', formulario);

        actividadDia(formulario);

        console.log(formulario);

    }

    const startUpdateActividad = async (formulario) => {

        console.log(formulario);

        try {
            //const { data } = await asistenciaApi.put(`/actividad/editar/${formulario.idFeriado}`, formulario);
            const { data } = await asistenciaApi.put(`/actividad/editar/`);
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }



    return {
        //Métodos
        startSavingActividad,
        startUpdateActividad
    }
}