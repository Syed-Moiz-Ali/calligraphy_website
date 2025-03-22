function PressMentions() {
    return (
        <div className="bg-gray-100 py-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">As Seen In</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Art Weekly</h3>
                    <p className="text-gray-600">"A must-have for art lovers."</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Home Decor Mag</h3>
                    <p className="text-gray-600">"Elegant and timeless designs."</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Craft Trends</h3>
                    <p className="text-gray-600">"Redefining calligraphy art."</p>
                </div>
            </div>
        </div>
    );
}

export default PressMentions;