 
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
    window.open('https://instagram.com/hamsi_handloom', '_blank');
  };

  return (
    <div className="h-screen overflow-auto bg-gradient-to-br from-black via-gray-900 to-black relative">
      
      {/* Animated Gold Elements Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Gold Icons */}
        <div className="absolute top-10 sm:top-20 left-8 sm:left-16 opacity-20">
          <div className="animate-bounce" style={{animationDuration: '3s'}}>
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
        <div className="absolute top-32 sm:top-40 right-12 sm:right-20 opacity-20 animate-bounce" style={{animationDuration: '4s'}}>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-12 sm:left-24 opacity-20 animate-pulse">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Gold Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-15 animate-bounce" style={{animationDuration: '6s'}}></div>
        
        {/* Shiny Gold Particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-35" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Container */}
      <div className="h-full flex items-center relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full">
            
            {/* Left Side - Launch Soon GIF Only */}
            <div className={`flex justify-center items-center h-full transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="relative">
                <img 
                  src="/launch-soon.gif" 
                  alt="Launching Soon"
                  className="w-80 h-80 md:w-96 md:h-96 max-w-[400px] max-h-[400px] object-cover rounded-full shadow-2xl border-4 border-gradient-to-r from-yellow-400 to-amber-500"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(251, 191, 36, 0.4))',
                    animation: isLoaded ? 'pulse-gold 3s ease-in-out infinite' : 'none',
                    boxShadow: '0 0 50px rgba(251, 191, 36, 0.3), inset 0 0 50px rgba(251, 191, 36, 0.1)'
                  }}
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Right Side - Brand Story & Social */}
            <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Brand Story */}
              <div className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-yellow-400/30 relative overflow-hidden">
                {/* Gold shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent transform -skew-x-12 translate-x-full animate-shine"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent"
                        style={{
                          textShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
                          animation: 'shimmer 2s ease-in-out infinite alternate'
                        }}>
                      Our Story
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                      <span className="font-medium text-yellow-400">Hamsi Boutique</span> is the beautiful manifestation of two sisters' shared dream.
                      <span className="font-medium text-amber-300"> Prathibha and Bhavana Kamreddy</span> envisioned creating a boutique that would make beautiful,
                      quality fashion accessible to everyone in their community.
                    </p>
                    
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                      As we prepare for our grand opening, we're committed to supporting <em className="text-yellow-400">local artisans</em>,
                      promoting <em className="text-amber-400">sustainable fashion</em>, and creating a space where every customer feels welcomed,
                      valued, and beautiful. <span className="font-medium text-yellow-300">Every piece in our collection has been chosen with love and care.</span>
                    </p>
                  </div>
                </div>
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

      {/* Enhanced Black & Gold Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse-gold {
            0%, 100% { 
              filter: drop-shadow(0 20px 40px rgba(251, 191, 36, 0.4));
              transform: scale(1);
              box-shadow: 0 0 50px rgba(251, 191, 36, 0.3), inset 0 0 50px rgba(251, 191, 36, 0.1);
            }
            50% { 
              filter: drop-shadow(0 25px 50px rgba(251, 191, 36, 0.6));
              transform: scale(1.02);
              box-shadow: 0 0 70px rgba(251, 191, 36, 0.5), inset 0 0 70px rgba(251, 191, 36, 0.2);
            }
          }
          
          @keyframes shimmer {
            0% { 
              text-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
            }
            100% { 
              text-shadow: 0 0 30px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.6);
            }
          }
          
          @keyframes shine {
            0% { 
              transform: translateX(-100%) skewX(-12deg);
            }
            100% { 
              transform: translateX(300%) skewX(-12deg);
            }
          }
          
          @keyframes glow-pulse {
            0% { 
              box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
            }
            100% { 
              box-shadow: 0 0 50px rgba(251, 191, 36, 0.8), 0 0 70px rgba(251, 191, 36, 0.4);
            }
          }
          
          .animate-shine {
            animation: shine 3s ease-in-out infinite;
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `
      }} />
    </div>
  );
}
