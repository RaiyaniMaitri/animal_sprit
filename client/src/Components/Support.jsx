import React from "react";

export default function Support() {
    return(
        <>
        <body className="bg-gray-100">
        <div className="container mx-auto p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-semibold mb-4">Welcome to Our Support Center</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">How Can We Help You Today?</h2>
                <p className="text-gray-600">At Animal Spirit, we're committed to providing exceptional support to our valued customers. Whether you have a question, need assistance with our products or services, or want to give us feedback, we're here to help.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Contact Options</h2>
                <ul className="list-disc pl-6">
                    <li className="mb-2"><a href="Contact" className="text-blue-500">Knowledge Base</a>: Explore our comprehensive Knowledge Base where you can find answers to frequently asked questions.</li>
                    <li className="mb-2">Email: <a href="mailto:support@yourcompany.com" className="text-blue-500">support@animalspirit.com</a></li>
                    <li className="mb-2">Phone: <span className="text-blue-500">+911234567890</span></li>
                    <li className="mb-2">Live Chat: Chat with a support representative in real-time during business
                        hours.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Support Hours</h2>
                <p className="text-gray-600">Monday - Friday: 9:00 AM to 6:00 PM (IST)<br/> Saturday - Sunday:
                    Closed</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Customer Feedback</h2>
                <p className="text-gray-600">We value your feedback! Please let us know if you have any suggestions,
                    comments, or ideas.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Reporting Issues</h2>
                <p className="text-gray-600">If you encounter any technical issues or bugs, please report them to our
                    support team.</p>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
                <p className="text-gray-600">Follow us on social media to stay updated with the latest news and
                    announcements.</p>
            </div>
        </div>
    </div>
    </body>
        </>
    )
}