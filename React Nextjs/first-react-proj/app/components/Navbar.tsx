import Link from "next/link"

export default function Navbar(){
    interface NavMenu {
        [key:string]:string
    }

    const navMenu:NavMenu = {
        "Home": '/',
        "Profile": '/profile-page',
        "About": '/about',
        "Course": '/course',
    }

    return(
        <nav>
            <ul className="flex justify-between bg-slate-950 text-white">
                {Object.keys(navMenu).map( (data, index) =>(
                    <li key={index} className="py-6 px-30 hover:bg-white hover:text-slate-950">
                        <Link href={navMenu[data]}>{data}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}