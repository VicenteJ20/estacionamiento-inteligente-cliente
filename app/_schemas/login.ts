import * as Yup from "Yup"

export const LoginShema = Yup.object().shape({
  email: Yup.string().email('El correo electrónico ingresado no es válido').required('Debe ingresar un correo electrónico.'),
  password: Yup.string().required('Debe ingresar una contraseña.')
})
