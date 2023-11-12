'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { RequestPage } from "@/app/_components/dashboard/personal/RequestPage"
import { UserPage } from "@/app/_components/dashboard/personal/UserPage"
import { useEffect, useState } from "react"

const PersonalInfo = ({ params }: any) => {
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
    <>
      {
        personalInfo && personalInfo.length > 0 && !personalInfo[0].role && !personalInfo[0].accountType ? (

          <RequestPage infoUser={personalInfo} />
        ) : (
          <UserPage infoUser={personalInfo} />
        )
      }
    </>
  )
}

export default PersonalInfo