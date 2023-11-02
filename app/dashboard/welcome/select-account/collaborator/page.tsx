import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { CollabAccountForm } from "@/app/_components/welcome/colllabForm"
import { WelcomeCollaboratorAccount } from "@/app/_dictionaries/es-CL"

const CollaboratorAccountWelcomePage = () => {
  const { title, oldPage, nextPage } = WelcomeCollaboratorAccount
  return (
    <article className='flex flex-col gap-8'>
      <HeaderWelcome title={title} href={oldPage} />
      <CollabAccountForm />
    </article>
  )
}

export default CollaboratorAccountWelcomePage