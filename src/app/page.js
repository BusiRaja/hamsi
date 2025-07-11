'use client';

import { useState, useEffect } from 'react';

export default function LaunchingSoon() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [followClicked, setFollowClicked] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleFollowClick = () => {
    setFollowClicked(true);
    // In a real app, this would redirect to Instagram
    window.open('https://www.instagram.com/hamsi_handloom', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-25 to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-32 w-48 h-48 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-25 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 left-40 w-64 h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-30 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              
              {/* Logo */}
              <div className="animate-fade-in">
                <div className="flex items-center space-x-3 mb-12">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
                      HAMSI BOUTIQUE
                    </h1> 
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h2 className={`text-5xl lg:text-6xl font-light text-rose-300 tracking-wider transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    WE'RE
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <h2 className={`text-5xl lg:text-6xl font-bold text-gray-800 tracking-wide transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    COMING
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <h2 className={`text-5xl lg:text-6xl font-bold text-gray-800 tracking-wide transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    SOON
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className={`transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Hello fellow shoppers! We're currently building our new fashion store. 
                  The beautiful manifestation of two sisters' shared dream to make quality fashion accessible to everyone.
                </p>
              </div>

              {/* Features */}
              <div className={`space-y-4 transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Curated Quality Fashion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-gray-700">Accessible Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-gray-700">Community Focused</span>
                </div>
              </div>

              {/* Sisters Credit */}
              <div className={`transform transition-all duration-1000 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <p className="text-sm text-gray-500 italic">
                  — Prathibha & Bhavana Kamreddy
                </p>
              </div>
            </div>

            {/* Right Side - Visual Content */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Video/Image Container */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-orange-100 to-pink-100">
                  {/* Placeholder for video/image */}
                  <div className="aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-orange-200 to-pink-200 relative">
                    
                    {/* Fashion Model Silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-64 bg-gradient-to-b from-orange-300 to-pink-300 rounded-full opacity-60 animate-pulse"></div>
                    </div>
                    
                    {/* Overlay Content */}
                    <div className="relative z-10 text-center text-white">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Fashion Preview</h3>
                      <p className="text-sm opacity-90">Coming Soon</p>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-40 animate-spin" style={{animationDuration: '10s'}}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full opacity-50 animate-bounce" style={{animationDuration: '2s'}}></div>
              </div>

              {/* Instagram Follow Section */}
              <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Stay Connected</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Follow us on Instagram for behind-the-scenes content and launch updates!
                    </p>
                  </div>
                  
                  <button 
                    onClick={handleFollowClick}
                    className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${followClicked ? 'animate-pulse' : ''}`}
                  >
                    {followClicked ? '✨ Following!' : 'Follow @hamsi_handloom'}
                  </button>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <span>🔔</span>
                    <span>Get notified when we launch</span>
                  </div>
                </div>
              </div>

              {/* Additional Social Icons */}
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.678-1.378l-.61 2.956c-.464 1.8-1.711 4.074-2.566 5.459C8.917 23.709 10.409 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-rose-300 rounded-full animate-ping" style={{animationDelay: '6s'}}></div>
      </div>
    </div>
  );
}
