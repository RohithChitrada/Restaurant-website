import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We'd love to hear from you! Whether it's feedback, inquiries, or reservations, feel free to reach out.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold rounded-lg py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
