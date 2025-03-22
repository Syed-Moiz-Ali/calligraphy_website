import { useState } from "react";
import { Link } from "react-router-dom";

function GiftFinder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    occasion: "",
    relationship: "",
    personality: "",
    priceRange: "",
    preferences: []
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("finder");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        preferences: [...formData.preferences, value]
      });
    } else {
      setFormData({
        ...formData,
        preferences: formData.preferences.filter(pref => pref !== value)
      });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitForm = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          title: "Custom Name Frame",
          price: 59.99,
          image: "/images/custom-name-frame.jpg",
          description: "A personalized frame featuring a beautifully styled name or message.",
          match: 96,
          reviewCount: 128,
          rating: 4.8
        },
        {
          id: 2,
          title: "Family Tree Display",
          price: 79.99,
          image: "/images/family-tree-frame.jpg",
          description: "Elegant frame displaying your family tree with customizable branches.",
          match: 89,
          reviewCount: 97,
          rating: 4.7
        },
        {
          id: 3,
          title: "Memory Timeline",
          price: 69.99,
          image: "/images/memory-timeline.jpg",
          description: "A chronological display of special moments throughout the years.",
          match: 84,
          reviewCount: 76,
          rating: 4.6
        }
      ];
      setResults(mockResults);
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  const occasionOptions = [
    { value: "birthday", label: "Birthday", icon: "🎂" },
    { value: "anniversary", label: "Anniversary", icon: "💍" },
    { value: "wedding", label: "Wedding", icon: "💒" },
    { value: "graduation", label: "Graduation", icon: "🎓" },
    { value: "housewarming", label: "Housewarming", icon: "🏡" },
    { value: "memorial", label: "Memorial/Remembrance", icon: "🕊️" }
  ];

  const relationshipOptions = [
    { value: "partner", label: "Partner/Spouse" },
    { value: "parent", label: "Parent" },
    { value: "child", label: "Child" },
    { value: "friend", label: "Friend" },
    { value: "colleague", label: "Colleague" }
  ];

  const personalityOptions = [
    { value: "traditional", label: "Traditional" },
    { value: "modern", label: "Modern/Contemporary" },
    { value: "artistic", label: "Artistic/Creative" },
    { value: "minimalist", label: "Minimalist" },
    { value: "nostalgic", label: "Nostalgic/Sentimental" }
  ];

  const priceRangeOptions = [
    { value: "budget", label: "Budget-Friendly ($25-$50)" },
    { value: "mid", label: "Mid-Range ($50-$100)" },
    { value: "premium", label: "Premium ($100+)" }
  ];

  const preferenceOptions = [
    { value: "personalized", label: "Personalized with names/dates" },
    { value: "photo", label: "Includes photo display" },
    { value: "handcrafted", label: "Handcrafted materials" },
    { value: "sustainable", label: "Eco-friendly/Sustainable" },
    { value: "interactive", label: "Interactive elements" }
  ];

  // Progress indicator calculation
  const progressPercentage = ((step - 1) / 3) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
            Find Your Perfect Gift
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer a few questions and we'll recommend personalized frame gifts tailored to your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px space-x-8">
              <button
                onClick={() => handleTabChange("finder")}
                className={`py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200 ${
                  activeTab === "finder"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Gift Finder
              </button>
              <button
                onClick={() => handleTabChange("popular")}
                className={`py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200 ${
                  activeTab === "popular"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Popular Gifts
              </button>
              <button
                onClick={() => handleTabChange("inspiration")}
                className={`py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200 ${
                  activeTab === "inspiration"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Gift Inspiration
              </button>
            </nav>
          </div>
        </div>

        {activeTab === "finder" && (
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {step} of {step > 3 ? 4 : 3}
                </span>
                <span className="text-sm font-medium text-indigo-600">
                  {step === 1 ? "Occasion" : step === 2 ? "Recipient" : step === 3 ? "Preferences" : "Results"}
                </span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Step 1: Occasion */}
              {step === 1 && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What's the occasion?</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {occasionOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          formData.occasion === option.value
                            ? "border-indigo-600 bg-indigo-50"
                            : "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="occasion"
                          value={option.value}
                          checked={formData.occasion === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-3xl mb-2">{option.icon}</span>
                        <span className="text-sm font-medium text-gray-900">{option.label}</span>
                        {formData.occasion === option.value && (
                          <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
                            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0l4.186-4.186a1 1 0 00-1.414-1.414L5 5.414 3.707 4.121z" />
                            </svg>
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Relationship & Personality */}
              {step === 2 && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell us about the recipient</h2>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-700 mb-4">
                      What is your relationship to them?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {relationshipOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            formData.relationship === option.value
                              ? "border-indigo-600 bg-indigo-50"
                              : "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="relationship"
                            value={option.value}
                            checked={formData.relationship === option.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-gray-900">{option.label}</span>
                          {formData.relationship === option.value && (
                            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
                              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0l4.186-4.186a1 1 0 00-1.414-1.414L5 5.414 3.707 4.121z" />
                              </svg>
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-4">
                      How would you describe their style?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {personalityOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            formData.personality === option.value
                              ? "border-indigo-600 bg-indigo-50"
                              : "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="personality"
                            value={option.value}
                            checked={formData.personality === option.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-gray-900">{option.label}</span>
                          {formData.personality === option.value && (
                            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
                              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0l4.186-4.186a1 1 0 00-1.414-1.414L5 5.414 3.707 4.121z" />
                              </svg>
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Price Range & Preferences */}
              {step === 3 && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Customize your search</h2>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-700 mb-4">
                      What is your budget?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {priceRangeOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            formData.priceRange === option.value
                              ? "border-indigo-600 bg-indigo-50"
                              : "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="priceRange"
                            value={option.value}
                            checked={formData.priceRange === option.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-gray-900">{option.label}</span>
                          {formData.priceRange === option.value && (
                            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
                              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0l4.186-4.186a1 1 0 00-1.414-1.414L5 5.414 3.707 4.121z" />
                              </svg>
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-4">
                      Any specific features you're looking for? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {preferenceOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            formData.preferences.includes(option.value)
                              ? "border-indigo-600 bg-indigo-50"
                              : "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30"
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="preferences"
                            value={option.value}
                            checked={formData.preferences.includes(option.value)}
                            onChange={handleCheckboxChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-gray-900">{option.label}</span>
                          {formData.preferences.includes(option.value) && (
                            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
                              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0l4.186-4.186a1 1 0 00-1.414-1.414L5 5.414 3.707 4.121z" />
                              </svg>
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Results */}
              {step === 4 && (
                <div>
                  <div className="bg-indigo-600 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                      <div className="mb-4 sm:mb-0">
                        <h2 className="text-2xl font-bold text-white">Your Perfect Gift Matches</h2>
                        <p className="text-indigo-200 mt-1">Based on your preferences, we found these ideal options</p>
                      </div>
                      <button
                        onClick={() => setStep(1)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-colors duration-200"
                      >
                        Start Over
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="space-y-6">
                      {results && results.map((product) => (
                        <div 
                          key={product.id}
                          className="flex flex-col sm:flex-row border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="sm:w-1/3 bg-gray-100 p-4 flex items-center justify-center">
                            <div className="relative w-full pt-[75%]">
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                                <span className="text-gray-500 text-sm">Product Image</span>
                              </div>
                              <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold rounded-full px-2 py-1">
                                {product.match}% Match
                              </div>
                            </div>
                          </div>
                          
                          <div className="sm:w-2/3 p-6">
                            <div className="flex justify-between mb-2">
                              <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                              <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                            </div>
                            
                            <div className="flex items-center mb-4">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`h-5 w-5 ${
                                      i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 ml-2">
                                {product.rating} ({product.reviewCount} reviews)
                              </span>
                            </div>
                            
                            <p className="text-gray-600 mb-6">{product.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {formData.preferences.map((pref) => (
                                <span 
                                  key={pref} 
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                >
                                  {preferenceOptions.find(p => p.value === pref)?.label}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                              <Link 
                                to={`/product/${product.id}`}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-colors duration-200"
                              >
                                View Details
                              </Link>
                              <button 
                                className="inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-colors duration-200"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              {step < 4 && (
                <div className="px-8 py-6 bg-gray-50 flex justify-between">
                  {step > 1 ? (
                    <button
                      onClick={prevStep}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-colors duration-200"
                    >
                      <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {step < 3 ? (
                    <button
                      onClick={nextStep}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-colors duration-200"
                      disabled={
                        (step === 1 && !formData.occasion) ||
                        (step === 2 && (!formData.relationship || !formData.personality))
                      }
                    >
                      Next
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={submitForm}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-all duration-200"
                      disabled={!formData.priceRange}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Finding Perfect Matches...
                        </>
                      ) : (
                        <>
                          Find My Perfect Gift
                          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default GiftFinder;