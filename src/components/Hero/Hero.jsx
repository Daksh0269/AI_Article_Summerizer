import React from 'react'
import { FiGithub, FiBookmark } from 'react-icons/fi'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen px-4'>
      <nav className='flex justify-between items-center w-full max-w-6xl mb-8 sm:mb-16 pt-4 sm:pt-6'>
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg">
            <FiBookmark className="text-lg sm:text-2xl text-white" />
          </div>
          <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Summize
          </span>
        </div>

        {/* GitHub Button */}
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base'
        >
          <FiGithub className="text-base sm:text-lg" />
          <span className="hidden xs:inline">GitHub</span>
          <span className="xs:hidden">Git</span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-2">
        <h1 className='mt-4 sm:mt-8 text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] sm:leading-[1.15] text-gray-800'>
          Summarize Articles with <br className='hidden sm:block max-md:hidden' />
          <span className='bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0'>
            OpenAI GPT-4
          </span>
        </h1>
        
        <h2 className='mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto px-4 sm:px-0'>
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>

        {/* Feature Pills - Only on Large Screens */}
        <div className="hidden lg:flex flex-wrap justify-center gap-4 mt-12">
          {[
            "⚡ Lightning Fast",
            "🎯 AI-Powered", 
            "📖 Easy to Read",
            "🔓 Open Source"
          ].map((feature, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 text-gray-700 font-medium shadow-lg"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Call to Action Arrow */}
        <div className="mt-12 sm:mt-16 animate-bounce">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-blue-500 transform rotate-45 mx-auto"></div>
        </div>
      </div>
    </header>
  );
}

export default Hero