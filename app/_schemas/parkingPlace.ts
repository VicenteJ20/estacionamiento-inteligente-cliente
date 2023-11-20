import * as Yup from 'yup'

export const parkingPlaceSchema = Yup.object().shape({
  latitude: Yup.number(),
  longitude: Yup.number(),
  altitude: Yup.number(),
  region: Yup.string().required('Debe ingresar la región del lugar de estacionamiento'),
  comuna: Yup.string().required('Debe ingresar la comuna del lugar de estacionamiento'),
  ciudad: Yup.string().required('Debe ingresar la ciudad del lugar de estacionamiento'),
  postalCode: Yup.number().required('Debe ingresar un código postal válido').min(0o0).max(9999999),
  alias: Yup.string().required('Debe ingresar un alias para el lugar de estacionamiento').min(4, 'El alias debe tener al menos 4 caracteres').max(20, 'El alias debe tener como máximo 20 caracteres'),
  
})