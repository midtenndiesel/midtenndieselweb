import React, { useState } from "react";

const Portfolio = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 mx-auto"
    >
      <div
        className="container mx-auto my-8 lg:px-20 min-h-max"
        data-aos="zoom-in"
      >
        <div className="w-full bg-white p-8 my-4 mx-auto rounded-2xl shadow-2xl">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
              Contact Us
            </h1>
          </div>

          {/* contact */}
          <div className="bg-blue-900 rounded-2xl m-12">
            <div className="flex flex-col text-white">
              <div className="flex justify-center items-center">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2" />
                </div>
                <div className="flex flex-col pt-6">
                  <h2 className="text-2xl text-center">Office Address</h2>
                  <p className="text-gray-400 text-center">
                    8 Ireland Dr, Dunlap, TN 37075
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center  pt-6">
                <div className="flex flex-col">
                  <h2 className="text-2xl text-center">Call Us</h2>
                  <p className="text-gray-400 text-center">
                    Tel: (615) 925-0118
                  </p>

                  <div className="mt-5 pb-6">
                    <h2 className="text-2xl text-center">Send an E-mail</h2>
                    <p className="text-gray-400 text-center">
                      middtenndiesel@aol.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
