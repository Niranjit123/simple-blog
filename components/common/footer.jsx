import Link from "next/link"

export default function Footer(){

    return (
        <footer className="border-2 border-red-200">
        <nav>
            <ul className="flex flex-start space-around">

                <Link href="/" >Home</Link>
                <Link href="/about" >About</Link>
                <Link href="/contact_us">Contact us</Link>
                <Link href="blogs">Blogs</Link>
nk


            </ul>
        </nav>
        </footer>
    )
}