import { FiTruck, FiGrid, FiMap, FiCpu, FiSettings, FiUsers } from "react-icons/fi";

export const BRAND_ITEM = {
  title: 'SmartParking',
  url: '/dashboard/',
  icon: <FiTruck />
}

export const LINK_ITEMS = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: <FiGrid />
  },
  {
    title: 'Lugares',
    url: '/dashboard/parking-place',
    submenu: true,
    subMenuItems: [
      {
        title: 'Sedes',
        url: '/dashboard/parking-place'
      },
      {
        title: 'Áreas',
        url: '/dashboard/areas'
      },
      {
        title: 'Estacionamientos',
        url: '/dashboard/plazas/estacionamientos'
      }
    ],
    icon: <FiMap />
  },
  {
    title: 'Personal',
    url: '/dashboard/personal',
    icon: <FiUsers />,
    submenu: true,
    subMenuItems: [
      {
        title: 'Colaboradores',
        url: '/dashboard/personal'
      },
      {
        title: 'Solicitudes pendientes',
        url: '/dashboard/personal/solicitudes-pendientes'
      }
    ]
  },
  {
    title: 'Métricas',
    url: '/dashboard/sensores',
    icon: <FiCpu />
  },
  {
    title: 'Configuración',
    url: '/dashboard/configuracion',
    icon: <FiSettings />
  }
]
