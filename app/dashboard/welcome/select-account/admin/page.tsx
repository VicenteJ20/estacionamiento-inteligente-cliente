import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { AdminAccountForm } from "@/app/_components/welcome/adminForm"
import { WelcomeAdminAccount } from "@/app/_dictionaries/es-CL"

const AdminAccountWelcomePage = () => {
  const { title, oldPage, nextPage } = WelcomeAdminAccount
  return (
    <article className='flex flex-col gap-8'>
      <HeaderWelcome title={title} href={oldPage} />
      <AdminAccountForm />
    </article>
  )
}

export default AdminAccountWelcomePage