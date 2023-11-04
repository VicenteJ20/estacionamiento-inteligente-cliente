'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { useEffect, useState } from "react"

const PersonalInfo = ({params}: any) => {
  const [personalInfo, setPersonalInfo] = useState([]) as any

  useEffect(() => {
    async function fetchPersonalInfo() {
      const response = await fetch(`/api/collaborator/${params.id}`)
      const res = await response.json()
      
      if (response.status === 200) {
        setPersonalInfo([res.data])
      }
    }
    fetchPersonalInfo()
  }, [params])
  return (
    <div>
      <HeaderDashboard overtitle={`Dashboard / personal / info / ${params.id}`} title={`Registro de solicitud de acceso para `} />
      <h1>Personal Info: {params.id}</h1>
      
      {
        personalInfo && personalInfo.length > 0 && personalInfo.map((item: any) => (
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.role}</li>
          </ul>
        ))
      }
      
    </div>
  )
}

export default PersonalInfo