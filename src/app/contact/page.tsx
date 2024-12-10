export default function Contact() {
    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Contact Us</h1>
                    <p className="text-center text-lg mb-8 text-gray-700">We’d love to hear from you! Feel free to reach out using the form below or contact us directly.</p>

                    <div className="max-w-4xl mx-auto">
                        <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Full Name</label>
                                <input type="text" id="name" className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-600 font-medium mb-2">Message</label>
                                <textarea id="message" rows={3} className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}