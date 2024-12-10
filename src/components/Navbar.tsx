import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="#" className="text-2xl font-bold">MyWebsite</a>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/about" className="hover:underline">About</Link></li>
                    <li><Link href="/products" className="hover:underline">Products</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}