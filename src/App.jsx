import { Routes, Route } from "react-router-dom";
import { CollectionsProvider } from "./contexts/CollectionsContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Collections from "./pages/Collections.jsx";
import CollectionDetail from "./pages/CollectionDetail.jsx";
import About from "./pages/About.jsx";
import CustomOrder from "./pages/CustomOrder.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import GiftFinder from "./components/GiftFinder.jsx";

function App() {
    return (
        <CollectionsProvider>
            <div className="min-h-screen flex flex-col font-serif">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/collections/:id" element={<CollectionDetail />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/custom-order" element={<CustomOrder />} />
                        <Route path="/gift-finder" element={<GiftFinder />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </CollectionsProvider>
    );
}

export default App;