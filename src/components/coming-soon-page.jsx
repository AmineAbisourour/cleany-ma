import { Instagram, MessageCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Zigzag background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,1000 C300,800 400,600 500,600 C600,600 700,800 1000,1000 L1000,0 L0,0 Z"
            fill="#89CFF0"
          />
          <path
            d="M0,1000 C250,800 350,400 500,400 C650,400 750,800 1000,1000 L1000,0 L0,0 Z"
            fill="#90EE90"
          />
          <path
            d="M0,1000 C200,800 300,200 500,200 C700,200 800,800 1000,1000 L1000,0 L0,0 Z"
            fill="#F4D03F"
          />
        </svg>
      </div>
      {/* Content */}
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-md w-full text-center z-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="space-y-4">
          <Link
            to="https://www.instagram.com/cleany.tanger/"
            target="_blank"
            className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600"
          >
            <Instagram className="mr-2" />
            Follow us on Instagram
          </Link>
          <Link
            to="https://wa.me/+212660004043"
            target="_blank"
            className="flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:from-green-500 hover:to-green-700"
          >
            <MessageCircle className="mr-2" />
            Contact us on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
