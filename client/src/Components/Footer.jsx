import React from "react";

export default function Footer() {
    return(
        <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="footer-section">
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac ex placerat, quis convallis ex posuere.</p>
                </div>

                
                <div className="footer-section">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="/login" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="/About" className="text-gray-400 hover:text-white">About</a></li>
                        <li><a href="/Services" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="/Contact" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                
                <div className="footer-section">
                    <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                    <form action="#" className="flex flex-col space-y-4">
                        <input type="email" name="email" className="text-black border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Your email address"></input>
                        <button type="submit" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        
        <div className="mt-8 border-t border-yellow-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400">© 2024 OurWebsite.com | Designed by Us</p>
        </div>
    </footer>
    )
}