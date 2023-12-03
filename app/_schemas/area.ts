import * as Yup from 'yup'

export const areasSchema = Yup.object().shape({
  areaName: Yup.string().required('El nombre del área es requerido'),
  areaDescription: Yup.string().required('La descripción del área es requerida')
})