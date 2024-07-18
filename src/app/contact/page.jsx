import React from 'react';

function Page() {
  return (
    <div className='space-x-4'>
      <div className='bg-black text-center py-8 '>
        <h1 className='text-4xl text-white underline mb-2'>Contact Us</h1>
        <h1 className='text-[#F5BB00] text-4xl mb-4'>"Midnight Solutions"</h1>
        <h3 className='text-white'>Let's start something together, Let's connect</h3>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md ">
          <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="first name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="first name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="resize-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                className="bg-[#F5BB00] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
