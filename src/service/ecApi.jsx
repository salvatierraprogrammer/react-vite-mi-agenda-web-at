import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase/Firebase_auth';

export const ecApi = createApi({
  reducerPath: 'ecApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    guardarDatosFormulario: builder.mutation({
      async queryFn(form) {
        try {
          await addDoc(collection(db, 'formulariosClientes'), {
            ...form,
            timestamp: serverTimestamp(),
          });
          return { data: 'Formulario guardado correctamente' };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
    }),
  }),
});

export const { useGuardarDatosFormularioMutation } = ecApi;
