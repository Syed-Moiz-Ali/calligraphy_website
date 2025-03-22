import { useState, useEffect } from "react";
import { getCollectionDetail } from "../api/collections.js";

function DetailModal({ id, isOpen, onClose }) {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && id) {
            setLoading(true);
            getCollectionDetail(id)
                .then((data) => setDetail(data))
                .finally(() => setLoading(false));
        }
    }, [id, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-indigo-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : detail ? (
                    <>
                        <h2 className="text-2xl font-bold text-primary mb-4">{detail.title}</h2>
                        <img src={detail.imageUrl} alt={detail.title} className="w-full h-64 object-cover rounded mb-4" />
                        <p className="text-gray-600 mb-4">{detail.description}</p>
                        {/* Add more fields like dimensions, extra images, etc., from your Detail API */}
                        <button onClick={onClose} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                            Close
                        </button>
                    </>
                ) : (
                    <p className="text-red-500">Failed to load details.</p>
                )}
            </div>
        </div>
    );
}

export default DetailModal;