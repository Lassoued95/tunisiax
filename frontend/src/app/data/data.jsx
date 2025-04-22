import { Star, Globe, Award } from 'lucide-react'
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
  },

  {
    id: 4,
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
  },

  {
    id: 6,
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
  },

  {
    id: 7,
    title: "El Ghriba Harmony Trail",
    images: [
      { src: "/activities/81.jpg", alt: "El Ghriba Synagogue exterior" },
      { src: "/activities/82.jpg", alt: "Interior tiles and lights" },
    ],
    tags: [
      { label: "🕍 Heritage", className: "bg-blue-100 text-blue-800" },
      { label: "🕊️ Spiritual", className: "bg-teal-100 text-teal-800" },
      { label: "1.5 km away", className: "" },
    ],
    rating: { stars: "★★★★★", score: "5.0" },
    description:
      'Walk the "Harmony Trail": Light a candle (with permission), capture the mosaic details in a peaceful shot, and unlock a heritage badge + a free local souvenir!',
  
    extraBadges: [
      { label: "🏆 Leaderboard", className: "bg-[#5D4FE1] text-white" },
      { label: "🔒 SafeRoute Verified", className: "bg-green-100 text-green-800" },
    ],
    link: { text: "Start the Journey ↗", href: "#" },
  }
  
  
  
  

];


export const ProfileData = {
      id: 1,
      name: "Mohamed Lassoued",
      points: 2567,
      avatar: "/avatar/pic1.jpg", 
      status: "online",
      bio: "Football at heart, photography by passion.",
}

export const StatsData = [
  { icon: Star, value: "4.8", label: "Rating" },
  { icon: Globe, value: "25", label: "Projects" },
  { icon: Award, value: "10", label: "Awards" }
]

export const  UsersData = [
    {
      id: 1,
      name: "Aziz Chebil",
      points: 2567,
      avatar: "https://th.bing.com/th/id/OIP.XaR7j7LOYVdFl-qvPjjXhQAAAA?w=248&h=248&rs=1&pid=ImgDetMain", 
      status: "online",
      bio: "Adventure seeker and food lover. Always up for a new challenge!",
    },
    
    {
      id: 2,
      name: "Med Ali El Heni",
      points: 1055,
      avatar: "https://th.bing.com/th/id/OIP.2AuepQvHs-hCGgx5ZA_DpgHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
      status: "offline",
      bio: "Fitness fanatic and outdoor explorer. Join me on my next adventure!",
    },
    {
      id: 3,
      name: "Ahmed Hamdi",
      points: 940,
      avatar: "https://th.bing.com/th/id/OIP.RQFL73iBW8CvNAPLVwpvwQAAAA?w=400&h=400&rs=1&pid=ImgDetMain", 
      status: "online",
      bio: "Art lover and cultural explorer. Always looking for new experiences.",
    },
    {
      id: 4,
      name: "Yassin Tamallah",
      points: 847,
      avatar: "https://th.bing.com/th/id/OIP.uFHPAtnt6jfBbswTlUHV1wHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain",
      status: "offline",
      bio: "Tech enthusiast and coffee addict. Let's connect and explore together!",
    },
    {
      id: 5,
      name: "Mohamed Ben Salah",
      points: 1467,
      avatar: "https://th.bing.com/th/id/OIP.hl3nfdBKinT3JNTp25c0CwAAAA?pid=ImgDet&w=184&h=182&c=7&dpr=1.3", 
      status: "online",
      bio: "Photography enthusiast exploring the city one quest at a time.",
    },
  ]

  export const quests = [
    {
      id: 1,
      title: "Hit party",
      category: "Social",
      distance: "1000 m away",
      rating: 4.7,
      image: "/placeholder.svg?height=120&width=120",
      date: "April 19, 2025",
      location: "Downtown Club",
      exp: 10,
    },
    {
      id: 2,
      title: "Food Festival",
      category: "Food",
      distance: "2.5 km away",
      rating: 4.8,
      image: "/placeholder.svg?height=120&width=120",
      date: "April 25, 2025",
      location: "City Square",
      exp: 15,
    },
    {
      id: 3,
      title: "Mountain Hike",
      category: "Outdoor",
      distance: "15 km away",
      rating: 4.5,
      image: "/placeholder.svg?height=120&width=120",
      date: "May 2, 2025",
      location: "Mountain Trail",
      exp: 25,
    },
    {
      id: 4,
      title: "Art Exhibition",
      category: "Culture",
      distance: "3 km away",
      rating: 4.3,
      image: "/placeholder.svg?height=120&width=120",
      date: "April 30, 2025",
      location: "City Gallery",
      exp: 8,
    },
  ]

  export const categories = [
    { name: "Food", icon: "🍔" },
    { name: "Social", icon: "👥" },
    { name: "Outdoor", icon: "⛰️" },
    { name: "Travel", icon: "✈️" },
    { name: "Culture", icon: "🎭" },
    { name: "Nightlife", icon: "🌃" },
  ]
  
  


  export const activities = [

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
    },

  ];