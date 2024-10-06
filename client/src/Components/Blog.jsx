import React from "react";
import img from "../assets/penguin.jpg"
import img1 from "../assets/elephant-1.jpg"
import img2 from "../assets/hyena.jpg"
import img3 from "../assets/gorilla.jpg"

export default function Blog() {
    return(
        <>
            <body className="bg-gray-100">

<div className="container mx-auto p-8">

    <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">Welcome to Our Blog</h1>
        <p className="text-gray-600 text-center mt-2">Stay updated with the latest news, tips, and trends</p>
    </header>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white rounded-lg shadow-md p-6">
            <img src={img} alt="img" className="mb-4 rounded-lg w-96 transition transform hover:scale-105 duration-300 ease-in-out"/>
            <h2 className="text-xl font-semibold mb-2">Unveiling the Mysteries of Panguin</h2>
            <p className="text-gray-600 mb-2">Published on July 8, 2024 by John Doe</p>
            <p className="text-gray-700 leading-relaxed">Panguin's act of creating the world by separating Yin and Yang symbolizes the transformation from chaos to order, from potential to actuality. It represents the innate drive in all beings to bring harmony and balance to their surroundings.</p>

        </div>


        <div className="bg-white rounded-lg shadow-md p-6">
        <img src={img1} alt="img" className="mb-4 rounded-lg w-96 transition transform hover:scale-105 duration-300 ease-in-out"/>
            <h2 className="text-xl font-semibold mb-2">Majestic Giants: A Tribute to Elephants</h2>
            <p className="text-gray-600 mb-2">Published on July 7, 2024 by Jane Smith</p>
            <p className="text-gray-700 leading-relaxed">Elephants, with their characteristic tusks and distinctive trunks, embody a blend of strength and sensitivity that is unique in the animal kingdom. Their sheer size alone can be awe-inspiring; the African elephant, the largest land mammal, can weigh up to six tons and stand over ten feet tall at the shoulder. Yet, beyond their physical presence, elephants display a complex social structure and emotional depth that rivals our own.</p>

        </div>


        <div className="bg-white rounded-lg shadow-md p-6">
        <img src={img2} alt="img" className="mb-4 rounded-lg w-96 transition transform hover:scale-105 duration-300 ease-in-out"/>
            <h2 className="text-xl font-semibold mb-2">Unveiling the Mysteries of Hyenas: Beyond the Misunderstood Laugh</h2>
            <p className="text-gray-600 mb-2">Published on July 6, 2024 by Alex Johnson</p>
            <p className="text-gray-700 leading-relaxed">Hyenas belong to the family Hyaenidae, which comprises four extant species: the spotted hyena, the striped hyena, the brown hyena, and the aardwolf. Each species has its own distinct characteristics and behaviors, adapted to different habitats across Africa and parts of Asia.</p>

        </div>


        <div className="bg-white rounded-lg shadow-md p-6">
        <img src={img3} alt="img" className="mb-4 rounded-lg w-96 transition transform hover:scale-105 duration-300 ease-in-out"/>
            <h2 className="text-xl font-semibold mb-2">Exploring the Majestic Gorilla: Nature's Gentle Giants</h2>
            <p className="text-gray-600 mb-2">Published on July 5, 2024 by Emily Brown</p>
            <p className="text-gray-700 leading-relaxed">Gorillas are primarily divided into two species: the Eastern Gorilla (Gorilla beringei) and the Western Gorilla (Gorilla gorilla), each further classified into subspecies. They inhabit diverse habitats ranging from montane forests to lowland swamps, demonstrating their adaptability within their respective environments.</p>

        </div>
    </div>

</div>

</body>
        </>
    )
}