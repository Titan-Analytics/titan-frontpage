import {SpeakerphoneIcon} from "@heroicons/react/outline";
import {Transition} from "@headlessui/react";
import {Fragment} from "react";

export default function Banner({ message, actionMessage, show}) {
  return (
      <Transition
          show={show}
          as={Fragment}
          enter="transform ease-out duration-500 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
      <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="p-2 rounded-lg bg-indigo-600 shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="hidden md:inline">{message}</span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                    href="/"
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  {actionMessage}
                </a>
              </div>
              {/*<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">*/}
              {/*  <button*/}
              {/*      type="button"*/}
              {/*      className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"*/}
              {/*  >*/}
              {/*    <span className="sr-only">Dismiss</span>*/}
              {/*    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
      </Transition>
  )
}