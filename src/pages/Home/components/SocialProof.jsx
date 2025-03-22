function SocialProof() {
    return (
        <div className="bg-gray-100 py-12 rounded-lg mb-16 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Join Our Community</h2>
            <p className="text-gray-600 mb-6">Over 10,000 happy customers trust us for their calligraphy needs.</p>
            <div className="flex justify-center space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Follow us on Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Like us on Facebook
                </a>
            </div>
        </div>
    );
}

export default SocialProof;