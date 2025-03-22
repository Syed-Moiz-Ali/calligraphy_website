import { createContext, useContext, useState } from "react";

const CollectionsContext = createContext();

export function CollectionsProvider({ children }) {

    // Dummy Data
const dummyPopularItems = [
    {
        id: 1,
        title: "Wedding Vows Frame",
        imageUrl: "https://via.placeholder.com/300x200?text=Wedding+Vows",
        description: "A timeless frame for your special day.",
    },
    {
        id: 2,
        title: "Motivational Quote",
        imageUrl: "https://via.placeholder.com/300x200?text=Motivational+Quote",
        description: "Inspire daily with elegant calligraphy.",
    },
    {
        id: 3,
        title: "Family Name Art",
        imageUrl: "https://via.placeholder.com/300x200?text=Family+Name",
        description: "Personalized family keepsake.",
    },
];

const dummyNewArrivalItems = [
    {
        id: 4,
        title: "Minimalist Love Note",
        imageUrl: "https://via.placeholder.com/300x200?text=Love+Note",
        description: "Simple yet stunning design.",
    },
    {
        id: 5,
        title: "Anniversary Poem",
        imageUrl: "https://via.placeholder.com/300x200?text=Anniversary+Poem",
        description: "Celebrate milestones beautifully.",
    },
    {
        id: 6,
        title: "Bold Statement Piece",
        imageUrl: "https://via.placeholder.com/300x200?text=Bold+Statement",
        description: "Make a striking impression.",
    },
];
    const [collections, setCollections] = useState(dummyPopularItems);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <CollectionsContext.Provider value={{ collections, setCollections, total, setTotal, loading, setLoading, error, setError }}>
            {children}
        </CollectionsContext.Provider>
    );
}

export const useCollections = () => useContext(CollectionsContext);