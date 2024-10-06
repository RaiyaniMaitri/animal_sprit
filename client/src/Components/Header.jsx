import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-slate-100 text-sky-600">
        <div className="md:hidden flex items-center justify-between p-4">
          <div className="text-xl font-bold">Animal Spirit</div>
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? (
              <span>&#x2715;</span>
            ) : (
              <span>&#9776;</span>
            )}
          </button>
        </div>
        <ul
          className={`md:flex items-center justify-center flex-wrap transition-transform duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="mx-2 md:mx-4 p-2 border-b-2 border-yellow-600 transition duration-300 ease-in-out transform hover:bg-emerald-100 hover:text-rose-800 hover:scale-105">
            {/* <a href="/">Home</a> */}
            <Link to="/home">Home</Link>
          </li>
          <li className="mx-2 md:mx-4 p-2 border-b-2 border-yellow-600 transition duration-300 ease-in-out transform hover:bg-emerald-100 hover:text-rose-800 hover:scale-105">
            {/* <a href="/gallery">Gallery</a> */}
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="mx-2 md:mx-4 p-2 border-b-2 border-yellow-600 transition duration-300 ease-in-out transform hover:bg-emerald-100 hover:text-rose-800 hover:scale-105">
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 md:mx-4 p-2 border-b-2 border-yellow-600 transition duration-300 ease-in-out transform hover:bg-emerald-100 hover:text-rose-800 hover:scale-105">
            {/* <a href="/blog">Blog</a> */}
            <Link to="/blog">Blog</Link>
          </li>
          <li className="mx-2 md:mx-4 p-2 border-b-2 border-yellow-600 transition duration-300 ease-in-out transform hover:bg-emerald-100 hover:text-rose-800 hover:scale-105">
            {/* <a href="/support">Support</a> */}
            <Link to="/support">Support</Link>
          </li>
          <li className="mx-2 md:mx-4 p-2 border-b-2 border-yellow-600 transition duration-300 ease-in-out transform hover:bg-emerald-100 hover:text-rose-800 hover:scale-105">
            <Link to="/login">Log Out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
