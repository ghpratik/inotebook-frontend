import React from 'react'

const Hero = () => {
    
      return (
          <div className="bg-gray-900 w-full mx-0 py-4">
              <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                  <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                      <h1 className="text-white font-bold text-4xl xl:text-5xl">
                          Store Your Notes on the
                           <span className="text-indigo-400"> Cloud with memopad</span>
                      </h1>
                      <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                      </p>
                      <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                          <a href="/login" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                              Get started
                          </a>
                          <a href="/about" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                              about
                          </a>
                      </div>
                  </div>
                  <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                      <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                  </div>
              </section>
          </div>
      )
}

export default Hero