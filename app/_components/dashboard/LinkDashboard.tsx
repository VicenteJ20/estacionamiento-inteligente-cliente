import Link from "next/link"

interface LinkProps {
    title: string,
    icon: JSX.Element,
    href: string
}

export const LinkSidebar = ({ title, icon, href }: LinkProps) => {

    return (
        <Link className="flex whitespace-nowrap flex-row items-center justify-start gap-5 w-full p-2 transition-all duration-300 ease-in-out hover:bg-gray-700 rounded-md" href={href}>
            <span>{icon}</span>
            <span>{title}</span>
        </Link>)
}