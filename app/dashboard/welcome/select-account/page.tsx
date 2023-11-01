import { HeaderWelcome } from "@/app/_components/welcome/Header"
import { WelcomeSelectAccount } from "@/app/_dictionaries/es-CL"

const SelectAccount = () => {
  const { title, cards, oldPage } = WelcomeSelectAccount
  return (
    <article className='flex flex-col gap-10 lg:gap-20 items-center justify-center'>
      <HeaderWelcome title={title} href={oldPage} />
      <ul className='flex flex-col gap-4'>
        {
          cards && cards.map((item, index) => (
            <li key={index}>
              <button className='border-2 text-start border-zinc-300 rounded-md p-4 pr-12 flex flex-col gap-2 relative w-full shadow-md'>
                <h3 className='font-semibold text-lg lg:text-xl text-zinc-700'>{item.title}</h3>
                <p className='font-normal text-md text-zinc-500'>{item.description}</p>
              </button>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default SelectAccount