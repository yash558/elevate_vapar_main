// src/components/TermsPage.js

import React from 'react'
import { Navbar } from '../components'

const Policy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen  flex items-center justify-center">
        <div className="bg-white p-8 shadow-lg rounded-lg w-[70%] h-screen overflow-y-auto my-32 mx-4 sm:mx-auto">
          <iframe
            src="https://elavateVapar.s3.ap-south-1.amazonaws.com/privacy_policy.html"
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Policy
