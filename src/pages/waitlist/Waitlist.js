import React, { useState } from "react";
import {ExclamationCircleIcon} from "@heroicons/react/solid";

function Waitlist() {
  const initialData = {
    name: '',
    email: '',
    organisation: '',
    about: ''
  }
  const [formData, setFormData] = useState(initialData)
  const [error, setError] = useState(false)

  async function onClickSubmit(e) {
    e.preventDefault()
    if (formData.name && formData.email) {

    }

    try {
      const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Waitlist?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "records":
            [
              {
                "fields": formData
              }
            ]
        })
      })
    } catch (e) {
      console.error(e)
    } finally {
      setFormData(initialData)
    }
  }

  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl mb-4">Let's keep in touch!</h1>
        <div className="bg-gradient-to-b from-gray-900 border border-blue shadow-white-md sm:rounded-lg w-1/4">
          <div className="px-8 py-6">
            <form action="" onSubmit={onClickSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <div className="mt-1 relative">
                  <input
                      onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                      value={formData.name}
                      type="text"
                      name="name"
                      id="name"
                      className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      aria-describedby="email-description"
                      required
                  />
                  {/*<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">*/}
                  {/*  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />*/}
                  {/*</div>*/}
                </div>
                {/*<p className="mt-2 text-sm text-red-300" id="email-error">*/}
                {/*  Your password must be less than 4 characters.*/}
                {/*</p>*/}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <div className="mt-1 relative">
                  <input
                      onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                      aria-describedby="email-description"
                      required
                  />
                  {/*<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">*/}
                  {/*  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />*/}
                  {/*</div>*/}
                </div>
                {/*<p className="mt-2 text-sm text-red-300" id="email-error">*/}
                {/*  Your password must be less than 4 characters.*/}
                {/*</p>*/}
              </div>
              <div className="mb-4">
                <label htmlFor="organisation" className="block text-sm font-medium text-white">
                  Organisation
                </label>
                <div className="mt-1">
                  <input
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value})}
                      type="text"
                      name="organisation"
                      id="organisation"
                      value={formData.organisation}
                      className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      aria-describedby="email-description"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="about" className="block text-sm font-medium text-white">
                  Tell us more about you
                </label>
                <div className="mt-1">
                  <textarea
                      onChange={(e) => setFormData({ ...formData, about: e.target.value})}
                      rows={4}
                      name="about"
                      id="about"
                      className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={''}
                      value={formData.about}
                  />
                </div>
              </div>
              <button
                  type="submit"
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