// Next.js 15 App Router - app/page.js
'use client';

import { useState, useEffect } from 'react';

export default function LaunchingSoon() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [followClicked, setFollowClicked] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleFollowClick = () => {
    setFollowClicked(true);
    window.open('https://instagram.com/hamsi_handloom', '_blank');
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-25 to-amber-50 relative">
      
      {/* Animated Fashion Elements Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Fashion Icons */}
        <div className="absolute top-10 sm:top-20 left-8 sm:left-16 opacity-10">
          <div className="animate-bounce" style={{animationDuration: '3s'}}>
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
        <div className="absolute top-32 sm:top-40 right-12 sm:right-20 opacity-10 animate-bounce" style={{animationDuration: '4s'}}>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-12 sm:left-24 opacity-10 animate-pulse">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-gradient-to-br from-amber-200 to-pink-200 rounded-full opacity-25 animate-bounce" style={{animationDuration: '6s'}}></div>
      </div>

      {/* Main Container */}
      <div className="h-full flex items-center relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full">
            
            {/* Left Side - Content */}
            <div className={`space-y-4 sm:space-y-6 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              
              {/* Logo */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="relative">
                  <img 
                    src="/home-logo.png" 
                    alt="Hamsi Fashion Boutique Logo"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full shadow-2xl"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-pink-300 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* 3D Animated LAUNCHING SOON Text */}
              <div className="text-center space-y-4">
                <div className="overflow-hidden">
                  <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 tracking-wide transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 scale-100' : 'translate-y-full scale-50'}`}
                      style={{
                        textShadow: '0 4px 8px rgba(236, 72, 153, 0.3), 0 8px 16px rgba(236, 72, 153, 0.2)',
                        transform: isLoaded ? 'perspective(1000px) rotateX(0deg) rotateY(0deg)' : 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
                        animation: isLoaded ? 'float3d 6s ease-in-out infinite' : 'none'
                      }}>
                    LAUNCHING SOON
                  </h2>
                </div>
              </div>

              {/* Fashion Description */}
              <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-md font-light">
                  Two sisters. One vision. Infinite possibilities. 
                  <span className="font-medium text-pink-600"> Prathibha & Bhavana </span>
                  are crafting a boutique where <em className="text-rose-500">elegance meets accessibility</em>.
                </p>
              </div>

              {/* Fashion Features */}
              <div className={`space-y-2 sm:space-y-3 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-light tracking-wide">Haute Couture Collection</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-light tracking-wide">Sustainable Fashion</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-light tracking-wide">Inclusive Sizing</span>
                </div>
              </div>
            </div>

            {/* Right Side - Video & Social */}
            <div className={`space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Video Container */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  {/* Video/Image Element */}
                  {!videoEnded ? (
                    <video 
                      className="w-full h-64 sm:h-72 md:h-80 object-cover"
                      autoPlay 
                      playsInline
                      onEnded={() => setVideoEnded(true)}
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3e8ff'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial,sans-serif' font-size='18' fill='%23a855f7' text-anchor='middle' dy='.3em'%3EHamsi Fashion Preview%3C/text%3E%3C/svg%3E"
                    >
                      <source src="https://res.cloudinary.com/hamsi/video/upload/v1752212486/uploads/mukdydbpbylka4ob0zle.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src="/launch-soon.png"
                      alt="Launch Soon"
                      className="w-full h-64 sm:h-72 md:h-80 object-cover"
                    />
                  )}
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Fashion Preview</p>
                      <p className="text-xs opacity-80">Coming Soon</p>
                    </div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full animate-pulse backdrop-blur-sm"></div>
                  </div>
                </div>
                
                {/* Floating Elements Around Video */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-amber-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>

              {/* Instagram Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-pink-100">
                <div className="text-center space-y-3 sm:space-y-4">
                  
                  {/* Instagram Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">Join Our Fashion Journey</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Behind-the-scenes • Exclusive previews • Style inspiration
                    </p>
                  </div>
                  
                  {/* Follow Button */}
                  <button 
                    onClick={handleFollowClick}
                    className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 ${followClicked ? 'animate-pulse' : ''}`}
                  >
                    {followClicked ? '✨ Following!' : 'Follow @hamsi_handloom'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float3d {
            0%, 100% { 
              transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px);
            }
            25% { 
              transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
            }
            50% { 
              transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px);
            }
            75% { 
              transform: perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px);
            }
          }
        `
      }} />
    </div>
  );
}
