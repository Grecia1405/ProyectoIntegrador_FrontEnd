import asistenciaApi from '../api/asistenciaApi';

export const useFeriado = () => {

    const startSavingFeriado = async (formulario) => {

        try {
            const { data } = await asistenciaApi.post('/feriado/registro', formulario);
            console.log(data);

        } catch (error) {

            console.log(error);
        }
    }

    const startUpdateFeriado = async (formulario) => {

        console.log(formulario);

        try {
            const { data } = await asistenciaApi.put(`/feriado/editar/${formulario.idFeriado}`, formulario);
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }



    return {
        //Métodos
        startSavingFeriado,
        startUpdateFeriado
    }
}
