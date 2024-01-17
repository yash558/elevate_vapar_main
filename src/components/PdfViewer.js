import React from 'react'
import { Document, Page } from 'react-pdf'

const PdfViewerModal = ({ isOpen, onClose, pdfUrl }) => {
  console.log(pdfUrl)
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full flex z-[1000] items-center justify-center ${
          isOpen ? 'block' : 'hidden'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className=" p-4">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-white/50"
          >
            Close
          </button>
          <div className="">
            <div className="object">
              <object
                data={pdfUrl}
                type="application/pdf"
                width="900px"
                height="650px" // Set an appropriate height
                className=" rounded shadow-lg"
              ></object>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PdfViewerModal
