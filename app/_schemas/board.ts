import * as Yup from 'yup'

export const boardSchema = Yup.object().shape({
  model: Yup.string().required('El modelo es requerido').min(4, 'El modelo debe tener al menos 4 carácteres'),
  brand: Yup.string().required('La marca es requerida').min(4, 'La marca debe tener al menos 4 carácteres'),
  serialNumber: Yup.string().required('El Serial es requerido').min(4, 'El serial debe tener al menos 4 carácteres').matches(/^[A-Z0-9]*$/, 'El serial debe ser alfanumérico, no se aceptan minúsculas'),
})