import React from "react";

export default function Contact() {
    return(
        <>
        <div className="container mx-auto my-10 p-8 bg-gray-100 shadow-lg rounded-lg">


<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at mauris sed dolor interdum facilisis vel id justo.</p>
        <ul className="text-gray-700">
            <li className="flex items-center mb-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg> */}
                123 street, City, Country
            </li>
            <li className="flex items-center mb-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg> */}
                Phone: +1234567890
            </li>
            <li className="flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg> */}
                Email: example@google.com
            </li>
        </ul>
    </div>

    <form action="#" method="POST" className="bg-gray-100 rounded-lg p-6">
        <div className="mb-4">
            <label for="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
            <label for="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
            <label for="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">Submit</button>
    </form>
</div>
</div>
</>
    )
}