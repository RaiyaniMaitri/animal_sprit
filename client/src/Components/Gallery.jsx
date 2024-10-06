import React from "react";
import img from '../assets/panda.jpg'
import img1 from '../assets/raino.jpg'
import img2 from '../assets/zebra.jpg'
import img3 from '../assets/elephant.jpg'
import img4 from '../assets/crocodile.jpg'
import img5 from '../assets/tiger-1.jpg'
import img6 from '../assets/hippo.jpg'
import img7 from '../assets/deer.jpg'
import img8 from '../assets/panther.jpg'
import img9 from '../assets/white-bear.jpg'
import img10 from '../assets/bear.png'
import img11 from '../assets/lion-1.jpg'

export default function Gallery() {
    return(
        <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-800 transition duration-500 transform hover:scale-105">This is our Gallery</h2>
            <p className="text-lg mt-2 text-gray-600 transition duration-500 transform hover:scale-105">Here you can see wild life</p>
        </header>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img1} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img2} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img3} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img4} alt="img"/>
    </div>
    </div>


    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img5} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img6} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img7} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img8} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img9} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img10} alt="img"/>
    </div>
    </div>

    <div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
        <img src={img11} alt="img"/>
    </div>
    </div>

</div>

    </div>
</div>
    )
}