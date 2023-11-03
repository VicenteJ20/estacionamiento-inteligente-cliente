'use client'
import React from "react"
import { useSession } from "next-auth/react"
import { FiHome, FiClipboard, FiMap, FiUsers, FiCheckCircle, FiEye, FiTool } from "react-icons/fi";
import { LinkSidebar } from "./LinkDashboard"


const Sidebar = () => {
    const session = useSession() as any
    return (
        <aside className="bg-gray-800 text-white min-w-[17rem] min-h-screen p-4 absolute top-0 left-0 bottom-0">
            <nav>
                <ul className="space-y-2">
                    <li className="p-5">
                        <h3 className="p-5">DASHBOARD</h3>
                        <ul>
                            <li>
                                <LinkSidebar title={"Menú principal"} icon={<FiHome />} href={"/dashboard/"} />
                            </li>
                            <li>
                                <LinkSidebar title={"Historial y logs"} icon={<FiClipboard />} href={"/dashboard/logs"} />
                            </li>
                        </ul>
                    </li>
                    <li className="p-5">
                        <h3>ÁREAS Y PERSONAL</h3>
                        <ul>
                            <li>
                                <LinkSidebar title={"Gestionar áreas"} icon={<FiMap />} href={"/dashboard/areas_personal/"} />
                            </li>
                            <li>
                                <LinkSidebar title={"Gestionar personal"} icon={<FiUsers />} href={"/dashboard/areas_personal/personal"} />
                            </li>
                            <li>
                                <LinkSidebar title={"Historial y logs"} icon={<FiClipboard />} href={"/dashboard/areas_personal/logs"} />
                            </li>
                        </ul>
                    </li>
                    <li className="p-5">
                        <h3>SENSORES</h3>
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
        </aside>
    )
}
export default Sidebar;