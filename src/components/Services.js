import React from "react";
import twofourserviceImg from "../images/24hourService.jpg";
import img3 from "../images/tires.webp";
import img4 from "../images/repair-shop.png";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We provide a wide range of services to help you get back on the road
          </h2>
        </div>
        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-center">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.1] transition duration-1000 ease-in-out object-cover mx-auto"
                  src={twofourserviceImg}
                  style={{ width: "50%", height: "250px", objectFit: "cover" }}
                />
                <h2 className="font-semibold my-4 text-2xl">24 Hour Service</h2>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-center">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out object-cover mx-auto"
                  src={img3}
                  style={{ width: "50%", height: "250px", objectFit: "cover" }}
                />
                <h2 className="font-semibold my-4 text-2xl">Tires</h2>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-center">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.11] transition duration-1000 ease-in-out object-cover mx-auto"
                  src={img4}
                  style={{ width: "50%", height: "250px", objectFit: "cover" }}
                />
                <h2 className="font-semibold my-4 text-2xl">Repair Shop</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
