import * as Yup from "Yup"

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Debe ingresar un nombre.').min(3, 'El nombre debe tener al menos 3 caracteres.'),
  lastname: Yup.string().required('Debe ingresar un apellido.').min(3, 'El apellido debe tener al menos 3 caracteres.'),
  email: Yup.string().email('El correo electrónico ingresado no es válido').required('Debe ingresar un correo electrónico.'),
  password: Yup.string().required('Debe ingresar una contraseña.').min(8, 'La contraseña debe tener al menos 8 caracteres.').matches(/^([a-zA-Z0-9]+[_\-@.#$%^*?&+~]?)+$/, 'La contraseña debe tener al menos un número, una letra mayúscula, una letra minúscula y un carácter especial.'),
  confirmpassword: Yup.string().required('Debe ingresar una contraseña.').min(8, 'La contraseña debe tener al menos 8 carácteres.').oneOf([(Yup.ref('password')),], 'Las contraseñas deben coincidir.')
})
