import * as Yup from 'yup'

export const AdminAccountSchema = Yup.object().shape({
  name: Yup.string().required('El nombre comercial es obligatorio').min(3, 'El nombre comercial debe tener al menos 3 caracteres'),
  rut: Yup.string().required('El RUT es obligatorio').min(11, 'El RUT debe tener al menos 11 caracteres').max(12, 'El RUT debe tener máximo 12 caracteres'),
  alias: Yup.string().min(3, 'El alias debe tener al menos 3 caracteres'),
  address: Yup.string().required('La dirección de la casa matriz es obligatoria').min(5, 'La dirección de la casa matriz debe tener al menos 5 caracteres'),
})