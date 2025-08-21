import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-6 bg-white border-t border-gray-200'>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © 2025 
          </div>
          
          {/* Attribution */}
          <div className="text-sm text-gray-500">
            Developed by <span className="text-gray-700 font-medium">Daksh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer