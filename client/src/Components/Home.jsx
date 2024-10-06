import React from "react";
import img from '../assets/lion.jpg'
import img1 from '../assets/leopard.jpg'
import img2 from '../assets/tiger-1.jpg'
import img3 from '../assets/puma.jpg'

export default function Home() {
    return(
    <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800 transition duration-500 transform hover:scale-105">Explore Beautiful Animals</h1>
            <p className="text-lg mt-2 text-gray-600 transition duration-500 transform hover:scale-105">Discover places that are beautiful and satisfying</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img} alt="img"/>
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">King Of Jungle</h2>
            <p className="text-gray-700">Lions are majestic big cats known for their strength, beauty, and social behavior.</p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img1} alt="img"/>
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">King of Speed</h2>
            <p className="text-gray-700">Leopards are fascinating big cats known for their stealth, adaptability, and striking appearance.</p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img2} alt="img"/>
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">King of Roar</h2>
            <p className="text-gray-700">Tigers are the largest cat species and among the most recognizable and revered animals in the world.</p>
        </div>
    </div>

    <div className="bg-white lg:hidden rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img3} alt="img"/>
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Excellent Climbers</h2>
            <p className="text-gray-700">They are highly adaptable and can live in a variety of habitats, including forests, grasslands, deserts, and mountainous regions.</p>
        </div>
    </div>
</div>

    </div>
</div>
    )
}