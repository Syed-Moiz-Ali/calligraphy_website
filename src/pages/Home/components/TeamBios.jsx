function TeamBios() {
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                    <img
                        src="https://via.placeholder.com/150?text=Amy"
                        alt="Amy"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-primary mb-2">Amy - Lead Calligrapher</h3>
                    <p className="text-gray-600">Brings 10+ years of artistry to every piece.</p>
                </div>
                <div>
                    <img
                        src="https://via.placeholder.com/150?text=John"
                        alt="John"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-primary mb-2">John - Frame Maker</h3>
                    <p className="text-gray-600">Crafts durable, elegant frames.</p>
                </div>
                <div>
                    <img
                        src="https://via.placeholder.com/150?text=Lisa"
                        alt="Lisa"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-primary mb-2">Lisa - Designer</h3>
                    <p className="text-gray-600">Turns ideas into stunning designs.</p>
                </div>
            </div>
        </div>
    );
}

export default TeamBios;