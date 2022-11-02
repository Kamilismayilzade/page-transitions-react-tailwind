import Link from "next/link"

export default function Navbar () {
    return (
        <nav className="text-2xl font-medium py-2 bg-transparent border-b-2 border-black relative z-20">
            <ul className="flex gap-12">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/Contact"}><li>Contact</li></Link>
            </ul>
        </nav>
    )
}