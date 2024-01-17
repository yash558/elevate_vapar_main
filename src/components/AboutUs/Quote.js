import React from "react";
import QuoteForm from "./QuoteForm";

const Quote = () => {
  return (
    <div className="p-8 ">
      {/* <header className="text-center ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Beautiful Quote Form Page
        </h1>
        <p className="text-lg text-gray-600">
          Get in touch with us by filling out the form below to request a quote
          for our services.
        </p>
      </header> */}

      <QuoteForm />
    </div>
  );
};

export default Quote;
