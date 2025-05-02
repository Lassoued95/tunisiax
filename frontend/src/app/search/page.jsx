"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'; // Optional: Search icon
import SecondNavbar from "../../components/secondnavbar/page";
import Footer from "../../components/footer/page";

// Activities Data
export const Activities = [
  {
    id: 1,
    title: "Echoes of El Jem Challenge",
    images: [
      { src: "/activities/31.jpg", alt: "El Jem Amphitheatre exterior view" },
      { src: "/activities/32.jpg", alt: "Inside the ancient Roman colosseum" },
    ],
    tags: [
      { label: "🏛️ Heritage", className: "bg-yellow-100 text-yellow-800" },
      { label: "📸 Historical Snap", className: "bg-red-100 text-red-800" },
      { label: "500 m away", className: "" },
    ],
    rating: { stars: "★★★★★", score: "4.8" },
    description:
      'Take on the "Echoes of El Jem": Record your voice in the arena’s center, snap a dramatic pose under the arches, and win a virtual relic + 25% off guided tours!',
    extraBadges: [
      { label: "🏆 Leaderboard", className: "bg-[#5D4FE1] text-white" },
      { label: "🔒 SafeRoute Verified", className: "bg-green-100 text-green-800" },
    ],
    link: { text: "Submit Entry ↗", href: "#" },
    category: "Heritage",
  },
  {
    id: 2,
    title: "Segya Splash & Dine Challenge",
    images: [
      { src: "/activities/21.png", alt: "Segya Beach swimming" },
      { src: "/activities/22.jpg", alt: "Segye Restaurant interior" },
    ],
    tags: [
      { label: "🏊 Beach", className: "bg-blue-100 text-blue-800" },
      { label: "📸 Photo Challenge", className: "bg-red-100 text-red-800" },
      { label: "800 m away", className: "" },
    ],
    rating: { stars: "★★★★★", score: "4.9" },
    description:
      'Join the "Blue Hour Challenge": Swim at sunset, snap a selfie with Segye’s octopus dish, win an NFT badge + 40% off water sports!',
    extraBadges: [
      { label: "🏆 Leaderboard", className: "bg-[#5D4FE1] text-white" },
      { label: "🔒 SafeRoute Verified", className: "bg-green-100 text-green-800" },
    ],
    link: { text: "Scan Proof ↗", href: "#" },
    category: "Beach",
  },
  {
    id: 3,
    title: "Medina Maze of Djerba",
    images: [
      { src: "/activities/41.jpg", alt: "Colorful streets of Djerba" },
      { src: "/activities/42.jpg", alt: "Street art in Djerbahood" },
    ],
    tags: [
      { label: "🧭 Exploration", className: "bg-purple-100 text-purple-800" },
      { label: "🎨 Art Spotting", className: "bg-pink-100 text-pink-800" },
      { label: "1.2 km away", className: "" },
    ],
    rating: { stars: "★★★★☆", score: "4.7" },
    description:
      'Complete the "Medina Maze": Find 5 murals in Djerbahood, capture creative selfies, and win a digital art frame + free drink at a local café!',
    extraBadges: [
      { label: "🏆 Leaderboard", className: "bg-[#5D4FE1] text-white" },
      { label: "🔒 SafeRoute Verified", className: "bg-green-100 text-green-800" },
    ],
    link: { text: "Start Quest ↗", href: "#" },
    category: "Exploration",
  },
  {
    id: 4,
    title: "Pirate Voyage to Flamingo Island",
    images: [
      { src: "/activities/61.jpg", alt: "Pirate boat sailing from Djerba" },
      { src: "/activities/62.png", alt: "Flamingos on the island" },
    ],
    tags: [
      { label: "🦩 Nature", className: "bg-pink-100 text-pink-800" },
      { label: "🏴‍☠️ Adventure", className: "bg-yellow-100 text-yellow-800" },
      { label: "Boat Trip", className: "" },
    ],
    rating: { stars: "★★★★★", score: "4.9" },
    description:
      'Sail with the pirates to the Flamingo Island: Dance on deck, take a selfie with a flamingo in the background, and win a pirate badge + free fresh juice on board!',
    extraBadges: [
      { label: "🏆 Leaderboard", className: "bg-[#5D4FE1] text-white" },
      { label: "🔒 SafeRoute Verified", className: "bg-green-100 text-green-800" },
    ],
    link: { text: "Set Sail ↗", href: "#" },
    category: "Nature",
  },
  {
    id: 5,
    title: "Sunset Sentinel of Mahdia",
    images: [
      { src: "/activities/51.jpg", alt: "Mahdia's Skifa Kahla at sunset" },
      { src: "/activities/52.jpg", alt: "Cliffside sea view in Mahdia" },
    ],
    tags: [
      { label: "🌅 Sunset Views", className: "bg-orange-100 text-orange-800" },
      { label: "📷 Golden Hour", className: "bg-red-100 text-red-800" },
      { label: "900 m away", className: "" },
    ],
    rating: { stars: "★★★★★", score: "4.9" },
    description:
      'Embark on the "Sunset Sentinel": Catch the golden hour from Skifa Kahla, record a timelapse over the sea, and earn a golden frame NFT + 30% off seafood dinner!',
    extraBadges: [
      { label: "🏆 Leaderboard", className: "bg-[#5D4FE1] text-white" },
      { label: "🔒 SafeRoute Verified", className: "bg-green-100 text-green-800" },
    ],
    link: { text: "Join Now ↗", href: "#" },
    category: "Views",
  },
  
  {
    id: 7,
    title: "Stargazing at Jebel Boukornine",
    images: [
      { src: "/activities/81.jpg", alt: "Stars over Jebel Boukornine" },
      { src: "/activities/82.jpg", alt: "Setting up telescope in the desert" },
    ],
    tags: [
      { label: "🌌 Stargazing", className: "bg-indigo-100 text-indigo-800" },
      { label: "🔭 Telescope Setup", className: "bg-blue-100 text-blue-800" },
      { label: "15 km away", className: "" },
    ],
    rating: { stars: "★★★★★", score: "5.0" },
    description:
      'Join the "Stargazing at Jebel Boukornine": Observe the night sky, capture photos with the Milky Way, and win a star map print + free hot chocolate!',
    extraBadges: [
      { label: "🏆 Leaderboard", className: "bg-[#5D4FE1] text-white" },
      { label: "🔒 SafeRoute Verified", className: "bg-green-100 text-green-800" },
    ],
    link: { text: "Join Now ↗", href: "#" },
    category: "Nature",
  },
];


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredActivities, setFilteredActivities] = useState(Activities);

  // Handle search functionality
  const handleSearch = () => {
    const results = Activities.filter((activity) => {
      const queryMatch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || activity.description.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryMatch = selectedCategory ? activity.category === selectedCategory : true;
      
      return queryMatch && categoryMatch;
    });
    setFilteredActivities(results);
  };

  return (
    <>
    <SecondNavbar/>
   
    <div className="max-w-7xl mx-auto p-4 ">
      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search activities by name or description"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-1/2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-green-500 text-white rounded-md"
        >
          <FaSearch />
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-6">
        <select
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Heritage">Heritage</option>
          <option value="Beach">Beach</option>
          <option value="Exploration">Exploration</option>
          <option value="Nature">Nature</option>
        </select>
      </div>

      {/* Activities Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div key={activity.id} className="rounded-lg border border-gray-300 p-4 bg-white shadow-lg">
              <Image
                src={activity.images[0].src}
                alt={activity.images[0].alt}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <h3 className="text-xl font-semibold mt-2">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {activity.tags.map((tag, index) => (
                  <span key={index} className={`px-2 py-1 text-xs rounded-full ${tag.className}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-yellow-500">{activity.rating.stars} ({activity.rating.score})</p>
                <a href={activity.link.href} className="text-blue-500 text-sm">
                  {activity.link.text}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No results found. Try adjusting your search or filters.</p>
        )}
      </div>
      
    </div>
          <Footer/>
    </>
    
  );
};

export default SearchPage;
