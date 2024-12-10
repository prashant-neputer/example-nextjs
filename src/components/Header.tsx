export default function Header() {
    return (
        <header className="bg-blue-500 text-white py-20">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
                <p className="text-lg mb-8">A simple and elegant homepage built with Tailwind CSS.</p>
                <a href="#services" className="bg-white text-blue-500 font-bold py-2 px-6 rounded hover:bg-gray-100">Get Started</a>
            </div>
        </header>
    );
}