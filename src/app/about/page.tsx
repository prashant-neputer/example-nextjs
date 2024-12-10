export default function About() {
    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">About Us</h1>
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-lg mb-4">
                            Welcome to MyWebsite! We are dedicated to providing top-notch services to our clients. Our team of experts is passionate about delivering exceptional results and exceeding expectations.
                        </p>
                        <p className="text-lg mb-4">
                            With years of experience in web development, graphic design, and SEO optimization, we pride ourselves on crafting solutions that meet your unique needs. At MyWebsite, your success is our priority.
                        </p>
                        <p className="text-lg">
                            Let us help you bring your vision to life and achieve your goals. Explore more about what we offer and feel free to get in touch with us for any inquiries.
                        </p>
                    </div>
                </div>
            </section>

            
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div className="text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                                <h3 className="text-xl font-semibold">Jane Doe</h3>
                                <p className="text-blue-500">CEO & Founder</p>
                                <p className="text-gray-600 mt-2">Jane is the driving force behind our company, leading with innovation and dedication.</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                                <h3 className="text-xl font-semibold">John Smith</h3>
                                <p className="text-blue-500">Lead Developer</p>
                                <p className="text-gray-600 mt-2">John specializes in creating efficient and scalable web solutions.</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                                <p className="text-blue-500">Marketing Head</p>
                                <p className="text-gray-600 mt-2">Emily is an expert in growing brands and connecting with audiences.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}