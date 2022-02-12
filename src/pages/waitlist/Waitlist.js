import React from "react";


function Waitlist() {
  return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gradient-to-b from-gray-900 border border-blue shadow-white-md sm:rounded-lg w-1/4">
          <div className="px-8 py-6">
            <form action="">

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <div className="mt-1">
                  <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      aria-describedby="email-description"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <div className="mt-1">
                  <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                      aria-describedby="email-description"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="organisation" className="block text-sm font-medium text-white">
                  Organisation
                </label>
                <div className="mt-1">
                  <input
                      type="text"
                      name="organisation"
                      id="organisation"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      aria-describedby="email-description"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-white">
                  Tell us more about you
                </label>
                <div className="mt-1">
                  <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={''}
                  />
                </div>
              </div>
              <button
                  type="button"
                  className=" mt-4 transition duration-500 ease-in-out bg-blue hover:bg-opacity-30 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-sm shadow-sm text-white bg-opacity-50 focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Waitlist