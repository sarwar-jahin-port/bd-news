import React, { useEffect, useState } from 'react';
import logo from "/images/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [papers, setPapers] = useState([]);
  useEffect(()=>{
    fetch("papers.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setPapers(data.slice(0, 12));
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); 
  },[])

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-xl font-bold">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/contact-us" className="text-white hover:text-gray-300">Contact Us</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <a href="/" className="block text-white py-2 px-4">Home</a>
          <a href="/contact-us" className="block text-white py-2 px-4">Contact Us</a>
        </div>
      )}

      <div className="md:flex hidden grid-cols-12 mt-5">
        {papers && papers.map((p, index) => (
          <a key={index} href={p.link} className="mx-3" target='_blank'>
            <img src={p.image} alt={`Newspaper ${index + 1}`} className="h-12" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
