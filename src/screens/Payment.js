import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbarone";

const Payment = () => {
  const [subscriptionDetails] = useState({
    subscriptionPrice: 12345,
    gstRate: 18,
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const calculateGST = () => {
    const gstAmount =
      (subscriptionDetails.subscriptionPrice * subscriptionDetails.gstRate) /
      100;
    return gstAmount;
  };

  const calculateTotal = () => {
    const totalAmount = subscriptionDetails.subscriptionPrice + calculateGST();
    return totalAmount;
  };
  return (
    <>
      <Navbar />
      <div className="p-36 flex">
        <div className="bg-[#F8F8F8] w-[80%] shadow rounded-l-xl">
          <div className=" p-12 w-[80%]">
            <h1 className="text-2xl font-semibold mb-4">
              Enter payment info to start your subscription
            </h1>
            <div>
                <h1 className="text-sm">Signed as a <br /> abc@gmail.com</h1>
            </div>
            <div className="border border-[#434343] my-4 w-[70%]"></div>
            <div className="rounded-lg ">
              <h2 className="text-lg font-semibold mb-4">
                Your Payment Method
              </h2>
              <form>
                <div className="mb-4 ">
                  <div className="relative border border-[#9E9E9F] rounded-md shadow-sm flex">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      className="p-2 border-none outline-none rounded-l-md w-full"
                      placeholder="Card Number"
                      placeholderTextColor="#000"
                    />
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      className="outline-none p-2 w-full"
                      placeholder="(MM/YY)"
                      placeholderTextColor="#000"
                    />
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      className="p-2 outline-none rounded-r-md w-full"
                      placeholder="CVV"
                      placeholderTextColor="#000"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="First Name"
                        placeholderTextColor="#000"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Last Name"
                        placeholderTextColor="#000"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Billing Address"
                    placeholderTextColor="#000"
                  />
                </div>
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="City"
                        placeholderTextColor="#000"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="State/Province"
                        placeholderTextColor="#000"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="PIN code"
                        placeholderTextColor="#000"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Country/Region"
                        placeholderTextColor="#000"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex center justify-center">
                  <button
                    type="submit"
                    className="bg-[#3267FF] text-white w-64 py-4 rounded-md hover:bg-blue-600"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="shadow w-[40%] rounded-r-lg">
          <div className="flex flex-col items-start p-10 justify-center">
            <h1>Summary</h1>
            <div className="border border-[#434343] my-4 w-[60%]"></div>
            <div>
              <h1 className="text-black text-xl text-bold">elavateVapar</h1>
            </div>
            <div className="pt-4">
              <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>
              <div className="mb-4">
                <div className="rounded-lg">
                  <div className="flex justify-between mb-2 gap-8 ">
                    <p className="text-gray-600">Subscription</p>
                    <p>
                      {formatCurrency(subscriptionDetails.subscriptionPrice)}/month
                    </p>
                  </div>
                  <div className="flex justify-between p-3 rounded-md  bg-[#3267FF] text-white  my-6">
                    <p className="">Special offer</p>
                    <p>{formatCurrency(2456)}/month</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Subtotal</p>
                    <p>
                      {formatCurrency(subscriptionDetails.subscriptionPrice)}/month
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">
                      GST {subscriptionDetails.gstRate}%
                    </p>
                    <p>{formatCurrency(calculateGST())}/month</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
              <div className="border border-[#434343] my-4"></div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>{formatCurrency(calculateTotal())}/month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
