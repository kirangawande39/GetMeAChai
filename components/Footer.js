"use client"
import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="text-sm text-gray-400 mb-3 md:mb-0">
          © {new Date().getFullYear()} Chai. All rights reserved.
        </div>

        {/* Middle Section */}
        <div className="text-sm text-gray-400 mb-3 md:mb-0">
          Made with <span className="text-red-500">❤️</span> by <span className="font-semibold text-gray-200">Kiran Gawande</span>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/kirangawande39"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-gawande-506189281"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
