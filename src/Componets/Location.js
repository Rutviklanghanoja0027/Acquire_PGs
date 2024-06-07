import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";

function Intro() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    // autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1328,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const toggleShow1 = () => {
    setShow1(!show1);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
  };
  const toggleShow2 = () => {
    setShow2(!show2);
    setShow1(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
  };
  const toggleShow3 = () => {
    setShow3(!show3);
    setShow2(false);
    setShow1(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
  };
  const toggleShow4 = () => {
    setShow4(!show4);
    setShow2(false);
    setShow3(false);
    setShow1(false);
    setShow5(false);
    setShow6(false);
  };
  const toggleShow5 = () => {
    setShow5(!show5);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow1(false);
    setShow6(false);
  };
  const toggleShow6 = () => {
    setShow6(!show6);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow1(false);
  };
  return (
    <div>
      <Title
        title="Locations"
        titleadd="Your Preferred Locations"
        titledis="Explore our curated selection of prime properties, ensuring comfortable and convenient accommodation near your desired location."
      />
      <div className="slider-container p-4" style={{ background: "#FFEEA9" }}>
        <Slider {...settings} className="items-center">
          {/* Card - 1 */}
          <div
            className="ud-single-testimonial max-w-full sm:max-w-[210px] md:max-w-[310px] lg:max-w-[410px] mx-auto sm:mx-2 p-2 sm:p-6 bg-yellow-300 mb-6 sm:mb-12 rounded-xl shadow-testimonial hover:shadow-2xl wow fadeInUp"
            data-wow-delay=".15s"
          >
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/04/5-Surefire-Instagram-Post-Ideas.png.webp"
                alt="Card image cap"
              />
            </a>
            <div className="p-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h5 className="text-lg sm:text-xl font-bold mb-2">
                  Navrang pura
                </h5>
              </div>
              <h5 className="text-base sm:text-lg font-bold mb-2">
                Nearest location 1
              </h5>
              {show1 && (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <div className="flex items-start justify-between px-4 py-2 w-auto bg-blue-200 text-black font-bold rounded-lg">
                    <div className="items-start justify-start">
                      panjab paratha
                    </div>
                    <div className="flex items-end justify-end">
                      <span className="bg-blue-200 text-black font-bold rounded-lg">
                        2km
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="items-center justify-center px-9">
                <button
                  className="border-2 border-black rounded-lg items-center justify-center hover:shadow-2xl hover:bg-yellow-400 bg-transparent text-xl text-black py-1 px-6 mt-3"
                  onClick={toggleShow1}
                >
                  {show1 ? "Hide" : "Show"} Nearest Location
                </button>
              </div>
            </div>
          </div>
          {/* Card - 2 */}
          <div
            className="ud-single-testimonial max-w-full sm:max-w-[210px] md:max-w-[310px] lg:max-w-[410px] mx-auto sm:mx-2 p-2 sm:p-6 bg-yellow-300 mb-6 sm:mb-12 rounded-xl shadow-testimonial hover:shadow-2xl wow fadeInUp"
            data-wow-delay=".15s"
          >
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/04/5-Surefire-Instagram-Post-Ideas.png.webp"
                alt="Card image cap"
              />
            </a>
            <div className="p-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h5 className="text-lg sm:text-xl font-bold mb-2">
                  Navrang pura
                </h5>
              </div>
              <h5 className="text-base sm:text-lg font-bold mb-2">
                Nearest location
              </h5>
              {show2 && (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <div className="flex items-start justify-between px-4 py-2 w-auto bg-blue-200 text-black font-bold rounded-lg">
                    <div className="items-start justify-start">
                      panjab paratha
                    </div>
                    <div className="flex items-end justify-end">
                      <span className="bg-blue-200 text-black font-bold rounded-lg">
                        2km
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="items-center justify-center px-9">
                <button
                  className="border-2 border-black rounded-lg items-center justify-center hover:shadow-2xl hover:bg-yellow-400 bg-transparent text-xl text-black py-1 px-6 mt-3"
                  onClick={toggleShow2}
                >
                  {show2 ? "Hide" : "Show"} Nearest Location
                </button>
              </div>
            </div>
          </div>
          {/* Card - 3 */}
          <div
            className="ud-single-testimonial max-w-full sm:max-w-[210px] md:max-w-[310px] lg:max-w-[410px] mx-auto sm:mx-2 p-2 sm:p-6 bg-yellow-300 mb-6 sm:mb-12 rounded-xl shadow-testimonial hover:shadow-2xl wow fadeInUp"
            data-wow-delay=".15s"
          >
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/04/5-Surefire-Instagram-Post-Ideas.png.webp"
                alt="Card image cap"
              />
            </a>
            <div className="p-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h5 className="text-lg sm:text-xl font-bold mb-2">
                  Navrang pura
                </h5>
              </div>
              <h5 className="text-base sm:text-lg font-bold mb-2">
                Nearest location 2
              </h5>
              {show3 && (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <div className="flex items-start justify-between px-4 py-2 w-auto bg-blue-200 text-black font-bold rounded-lg">
                    <div className="items-start justify-start">
                      panjab paratha
                    </div>
                    <div className="flex items-end justify-end">
                      <span className="bg-blue-200 text-black font-bold rounded-lg">
                        2km
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="items-center justify-center px-9">
                <button
                  className="border-2 border-black rounded-lg items-center justify-center hover:shadow-2xl hover:bg-yellow-400 bg-transparent text-xl text-black py-1 px-6 mt-3"
                  onClick={toggleShow3}
                >
                  {show3 ? "Hide" : "Show"} Nearest Location
                </button>
              </div>
            </div>
          </div>
          {/* Card - 4 */}
          <div
            className="ud-single-testimonial max-w-full sm:max-w-[110px] md:max-w-[310px] lg:max-w-[410px] mx-auto sm:mx-2 p-2 sm:p-6 bg-yellow-300 mb-6 sm:mb-12 rounded-xl shadow-testimonial hover:shadow-2xl wow fadeInUp"
            data-wow-delay=".15s"
          >
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/04/5-Surefire-Instagram-Post-Ideas.png.webp"
                alt="Card image cap"
              />
            </a>
            <div className="p-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h5 className="text-lg sm:text-xl font-bold mb-2">
                  Navrang pura
                </h5>
              </div>
              <h5 className="text-base sm:text-lg font-bold mb-2">
                Nearest location
              </h5>
              {show4 && (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <div className="flex items-start justify-between px-4 py-2 w-auto bg-blue-200 text-black font-bold rounded-lg">
                    <div className="items-start justify-start">
                      panjab paratha
                    </div>
                    <div className="flex items-end justify-end">
                      <span className="bg-blue-200 text-black font-bold rounded-lg">
                        2km
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="items-center justify-center px-9">
                <button
                  className="border-2 border-black rounded-lg items-center justify-center hover:shadow-2xl hover:bg-yellow-400 bg-transparent text-xl text-black py-1 px-6 mt-3"
                  onClick={toggleShow4}
                >
                  {show4 ? "Hide" : "Show"} Nearest Location
                </button>
              </div>
            </div>
          </div>
          {/* Card - 5 */}
          <div
            className="ud-single-testimonial max-w-full sm:max-w-[210px] md:max-w-[310px] lg:max-w-[410px] mx-auto sm:mx-2 p-2 sm:p-6 bg-yellow-300 mb-6 sm:mb-12 rounded-xl shadow-testimonial hover:shadow-2xl wow fadeInUp"
            data-wow-delay=".15s"
          >
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/04/5-Surefire-Instagram-Post-Ideas.png.webp"
                alt="Card image cap"
              />
            </a>
            <div className="p-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h5 className="text-lg sm:text-xl font-bold mb-2">
                  Navrang pura
                </h5>
              </div>
              <h5 className="text-base sm:text-lg font-bold mb-2">
                Nearest location
              </h5>
              {show5 && (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <div className="flex items-start justify-between px-4 py-2 w-auto bg-blue-200 text-black font-bold rounded-lg">
                    <div className="items-start justify-start">
                      panjab paratha
                    </div>
                    <div className="flex items-end justify-end">
                      <span className="bg-blue-200 text-black font-bold rounded-lg">
                        2km
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="items-center justify-center px-9">
                <button
                  className="border-2 border-black rounded-lg items-center justify-center hover:shadow-2xl hover:bg-yellow-400 bg-transparent text-xl text-black py-1 px-6 mt-3"
                  onClick={toggleShow5}
                >
                  {show5 ? "Hide" : "Show"} Nearest Location
                </button>
              </div>
            </div>
          </div>
          {/* Card - 6 */}
          <div
            className="ud-single-testimonial max-w-full sm:max-w-[210px] md:max-w-[310px] lg:max-w-[410px] mx-auto sm:mx-2 p-4 sm:p-2 bg-yellow-300 mb-6 sm:mb-12 rounded-xl shadow-testimonial hover:shadow-2xl wow fadeInUp"
            data-wow-delay=".15s"
          >
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/04/5-Surefire-Instagram-Post-Ideas.png.webp"
                alt="Card image cap"
              />
            </a>
            <div className="p-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h5 className="text-lg sm:text-xl font-bold mb-2">
                  Navrang pura
                </h5>
              </div>
              <h5 className="text-base sm:text-lg font-bold mb-2">
                Nearest location
              </h5>
              {show6 && (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <div className="flex items-start justify-between px-4 py-2 w-auto bg-blue-200 text-black font-bold rounded-lg">
                    <div className="items-start justify-start">
                      panjab paratha
                    </div>
                    <div className="flex items-end justify-end">
                      <span className="bg-blue-200 text-black font-bold rounded-lg">
                        2km
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="items-center justify-center px-9">
                <button
                  className="border-2 border-black rounded-lg items-center justify-center hover:shadow-2xl hover:bg-yellow-400 bg-transparent text-xl text-black py-1 px-6 mt-3"
                  onClick={toggleShow6}
                >
                  {show6 ? "Hide" : "Show"} Nearest Location
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Intro;
