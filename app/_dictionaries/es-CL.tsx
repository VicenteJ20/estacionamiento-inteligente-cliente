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

export const CarouselInfo = [
  {
    src: 'https://images.unsplash.com/photo-1600266511717-1cf08f902b56?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Administra tu negocio de forma fácil y sencilla',
    title: 'Administra tu estacionamiento en tiempo real desde cualquier lugar',
    description: 'Con SmartParking puedes administrar tus plazas de estacionamiento de forma fácil y sencilla, desde tu celular, tablet o computador. Solo necesitas conexión a internet.'
  },
  {
    src: 'https://images.unsplash.com/photo-1618371731836-2b9bff9ac72a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Desarrollado con la seguridad en mente',
    title: 'Un sistema seguro y confiable',
    description: 'SmartParking está desarrollado con la seguridad en mente, por lo que tus datos estarán seguros y protegidos, y solo tú podrás acceder a ellos.'
  },
  {
    src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Trabaja en equipo desde cualquier lugar',
    title: 'Trabaja en equipo sin importar donde estés',
    description: 'SmartParking te permite trabajar en equipo con tus colaboradores, sin importar donde estén. Solo necesitan una conexión a internet y un dispositivo compatible.'
  }
]

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
      type: true,
      title: 'Cuenta administrativa y dominio',
      description: 'Selecciona esta opción si estás registrando tu negocio por primera vez.',
      ask: 'Esta cuenta es para usuarios que estén registrando su negocio o empresa por primera vez, lo que creará un domino al cual otras personas (colaboradores) podrán unirse como colaboradores, y así poder administrar el negocio o empresa.',
      nextPage: '/dashboard/welcome/select-account/admin'
    },
    {
      type: false,
      title: 'Cuenta de colaborador y unirse a un dominio',
      description: 'Selecciona esta opción si eres un colaborador/a que está uniéndose a un dominio administrativo.',
      ask: 'Esta cuenta es para colaboradores de una empresa que se están incorporando a un dominio administrativo ya existente, lo que les permitirá tener acceso limitado si el administrador del dominio aprueba su solicitud.',
      nextPage: '/dashboard/welcome/select-account/collaborator'
    }
  ]
}

export const WelcomeAdminAccount = {
  title: 'Ingresa la información de tu empresa o negocio',
  oldPage: '/dashboard/welcome/select-account',
  nextPage: '/dashboard',
}

export const WelcomeCollaboratorAccount = {
  title: 'Seleccione el dominio al que quiere unirse',
  oldPage: '/dashboard/welcome/select-account',
  nextPage: '/dashboard',
}

export const WelcomeCollaboratorDomains = [
  {
    id: 1,
    name: 'INACAP',
  },
  {
    id: 2,
    name: 'Parking Carmen',
  },
  {
    id: 3,
    name: 'Mall Curicó'
  }
]