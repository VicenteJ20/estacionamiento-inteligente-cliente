'use client'
import React from "react"
import { signOut, useSession } from "next-auth/react"
import { FiHome, FiClipboard, FiMap, FiUsers, FiCheckCircle, FiEye, FiTool, FiMoreVertical } from "react-icons/fi";
import { LinkSidebar } from "./LinkDashboard"
import { BrandInfo } from "@/app/_dictionaries/es-CL";
import Image from "next/image";


const Sidebar = () => {
    const session = useSession() as any
    const { title, icon } = BrandInfo
    return (
        <aside className="bg-gray-800 text-white flex flex-col gap-8 justify-between min-w-[17rem] min-h-screen py-8 px-5 absolute top-0 left-0 bottom-0">
            <article className='flex flex-col gap-8'>
                <header className='flex flex-row gap-4 justify-start items-center'>
                    <Image src={icon} width={32} height={32} alt='' className='invert' />
                    <h2 className='font-semibold text-xl'>{title}</h2>
                </header>
                <nav>
                    <ul className="flex flex-col gap-6">
                        <li>
                            <h3 className="font-semibold mb-4">DASHBOARD</h3>
                            <ul>
                                <li>
                                    <LinkSidebar title={"Menú principal"} icon={<FiHome />} href={"/dashboard/"} />
                                </li>
                                <li>
                                    <LinkSidebar title={"Historial y logs"} icon={<FiClipboard />} href={"/dashboard/logs"} />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="font-semibold mb-4">ÁREAS Y PERSONAL</h3>
                            <ul>
                                <li>
                                    <LinkSidebar title={"Gestionar áreas"} icon={<FiMap />} href={"/dashboard/areas_personal/"} />
                                </li>
                                <li>
                                    <LinkSidebar title={"Gestionar personal"} icon={<FiUsers />} href={"/dashboard/personal"} />
                                </li>
                                <li>
                                    <LinkSidebar title={"Historial y logs"} icon={<FiClipboard />} href={"/dashboard/areas_personal/logs"} />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="font-semibold mb-4">SENSORES</h3>
                            <ul>
                                <li>
                                    <LinkSidebar title={"Visualizar estado"} icon={<FiCheckCircle />} href={"/dashboard/sensores/"} />
                                </li>
                                <li>
                                    <LinkSidebar title={"Gestionar sensores"} icon={<FiEye />} href={"/dashboard/sensores/gestionar"} />
                                </li>
                                <li>
                                    <LinkSidebar title={"Mantenimiento"} icon={<FiTool />} href={"/dashboard/sensores/mantenimiento"} />
                                </li>
                                <li>
                                    <LinkSidebar title={"Historial y logs"} icon={<FiClipboard />} href={"/dashboard/sensores/logs"} />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </article>
            <section className='flex flex-col gap-4'>
                <div className='px-4 py-3 border border-zinc-300 rounded-md flex flex-row gap-2'>
                    <Image src={session?.data?.user?.image || '/images/user.webp'} width={100} height={100} alt='' className="rounded-full object-center w-12 h-12 border-2 border-zinc-300" />
                    <article className='flex flex-col gap-1'>
                        <h3 className='font-semibold'>{session?.data?.user?.name}</h3>
                        <p title={session?.data?.user?.email} className='text-sm text-zinc-300 max-w-[11rem] overflow-hidden'>{session?.data?.user?.email}</p>
                    </article>
                </div>
                <button onClick={() => signOut()} className='bg-red-700 py-3 px-4 rounded-md font-semibold hover:bg-red-900 transition-all duration-300 ease-in-out'>Cerrar sesión</button>
            </section>
        </aside>
    )
}
export default Sidebar;