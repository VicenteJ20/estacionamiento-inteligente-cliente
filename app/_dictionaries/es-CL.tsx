import Link from "next/link"

export const BrandInfo = {
  title: 'Smart Parking',
  icon: '/images/logo.webp'
}

export const CaruselInfoSignIn = [
  {
    imageUrl: '/images/signin.webp',
    title: 'Administra tu estacionamiento en tiempo real desde cualquier lugar',
    description: 'Con SmartParking puedes administrar tus plazas de estacionamiento de forma fácil y sencilla, desde tu celular, tablet o computador. Solo necesitas conexión a internet.'
  },
]

export const CarouselLogIninfo = {
  title: 'INICIAR SESIÓN EN',
  brand: 'SMART PARKING',
  description: 'Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.',
}

export const CarouselSignUpInfo = {
  title: 'REGISTRARSE EN',
  brand: 'SMART PARKING',
  description: 'Ingrese sus datos personales para crear su cuenta.',
}


// WELCOME SECTION



export const WelcomeInfo = {
  imageUrl: '/images/welcome.png',
  title: 'Vamos a configurar algunas cosas...',
  description: 'Necesitamos un poco más de información para configurar su cuenta, cuando esté listo/a haga clic en el botón "Continuar".',
  nextPage: '/dashboard/welcome/select-account',
}

export const WelcomeSelectAccount = {
  title: 'Selecciona el tipo de cuenta que quieres crear', 
  oldPage: '/dashboard/welcome',
  cards: [
    {
      type: 1,
      title: 'Cuenta administrativa y dominio',
      description: 'Selecciona esta opción si estás registrando tu negocio por primera vez.',
      ask: 'Esta cuenta es para usuarios que estén registrando su negocio o empresa por primera vez, lo que creará un domino al cual otras personas (colaboradores) podrán unirse como colaboradores, y así poder administrar el negocio o empresa.',
    },
    {
      type: 2,
      title: 'Cuenta de colaborador y unirse a un dominio',
      description: 'Selecciona esta opción si eres un colaborador/a que está uniéndose a un dominio administrativo.',
      ask: 'Esta cuenta es para colaboradores de una empresa que se están incorporando a un dominio administrativo ya existente, lo que les permitirá tener acceso limitado si el administrador del dominio aprueba su solicitud.',
    }
  ]
}