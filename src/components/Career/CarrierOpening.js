import React, { useState } from "react";
import PdfViewerModal from "../PdfViewer";

const CarrierOpening = () => {
  const [expandedIndices, setExpandedIndices] = useState([]);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState("");

  const toggleDetails = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const jobs = [
    {
      title: "Corporate Sales Manager",
      desc: "Europe / Full-time Onsite or Remote",
      detailedDesc: "This is a new Job for london person",
      url:
        "https://elavateVapar.s3.ap-south-1.amazonaws.com/Corporate_Sales_Manager.pdf",
    },
    {
      title: "Regional Corporate Sales Manager",
      desc: "Europe / Full-time Onsite or Remote",
      detailedDesc: "",
      url:
        "https://elavateVapar.s3.ap-south-1.amazonaws.com/Regional_Corporate_Sales_Manager.pdf",
    },
    {
      title: "Zonal Sales Manager",
      desc: "Europe / Full-time Onsite or Remote",
      detailedDesc: "",
      url:
        "https://elavateVapar.s3.ap-south-1.amazonaws.com/Zonal_Sales_Manager.pdf",
    },
  ];

  const closePdfModal = () => {
    setSelectedPdfUrl("");
    setIsPdfModalOpen(false);
  };
  const openPdfModal = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setIsPdfModalOpen(true);
  };

  return (
    <div className="py-20 md:mx-32 mx-4" id="jobs">
      <h1 className="text-left mb-4 text-4xl text-[#212326] font-bold">
        Job Openings @ <span className="text-[#3267FF]">elavateVapar</span>
      </h1>
      <span className=" text-sm text-[#999999]">
        elavateVapar is committed to providing technology-based integration of
        OPD plans to cover OPD expenses for everyone across India. We believe
        that our employees are the heart of our organization, and their passion,
        skills, and commitment drive our success. If you are looking for a
        rewarding and fulfilling career in the healthcare industry, you've come
        to the right place. To look for the right opportunities, click on the
        available roles listed, and you may write to
        talentacquistion@elavateVapar.com
        <br />
      </span>
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={closePdfModal}
        pdfUrl={selectedPdfUrl}
      />
      <div>
        {jobs.map((item, index) => {
          const isExpanded = expandedIndices.includes(index);

          return (
            <div key={index}>
              <div className="flex flex-wrap md:justify-between items-center  my-6">
                <div className="">
                  <h1 className="text-[#3267FF] font-semibold text-xl">
                    {item.title}
                  </h1>
                  {/* <p className="text-[#343434] text-sm">{item.desc}</p> */}
                </div>
                <div>
                  <button
                    className="bg-[#5DA4F8] md:mt-0 mt-4 text-white px-8 py-4 rounded-md"
                    onClick={() => openPdfModal(item.url)}
                  >
                    View Job Details
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarrierOpening;
