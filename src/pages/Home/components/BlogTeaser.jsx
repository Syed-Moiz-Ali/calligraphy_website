import { Link } from "react-router-dom";

function BlogTeaser() {
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Get Inspired</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">5 Ways to Use Calligraphy Frames</h3>
                    <p className="text-gray-600 mb-4">From home decor to gifting, explore creative ideas.</p>
                    <Link to="/blog" className="text-primary hover:underline">
                        Read More
                    </Link>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">Behind the Scenes</h3>
                    <p className="text-gray-600 mb-4">See how we bring your ideas to life.</p>
                    <Link to="/blog" className="text-primary hover:underline">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogTeaser;