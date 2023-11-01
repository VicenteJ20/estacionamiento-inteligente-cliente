import * as Yup from 'yup'

export const CollabAccountSchema = Yup.object().shape({
  domain: Yup.string().required('El dominio es obligatorio')
})