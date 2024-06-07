import React from "react";
import Slider from "react-slick";
import Title from "./Title";

const Intro2 = () => {
  
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true, 
    autoplaySpeed: 4000,
    arrows: false, 
  };

  
  const getRandomImageUrl = () => {
    
    const placeholders = [
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Cerro_Tololo_Hotel_Interior_360_Panorama_%282022_04_08_Pano360_Tololo_Hotel_Room-CC%29.jpg",
      "https://fastly.picsum.photos/id/953/800/400.jpg?hmac=NbWnQu2J-1UvsjJb1Y4Gr80Tp7xr4m__AYuVMhc0z2M",
      "https://loremflickr.com/cache/resized/65535_52783135007_6e1a40a760_c_800_400_nofilter.jpg",
      "https://via.placeholder.com/800x400?text=Slide+4",
      "https://via.placeholder.com/800x400?text=Slide+5",
    ];
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    return placeholders[randomIndex];
  };

  return (
    <>
      <Title
        title="Amenities"
        titleadd="Discover Our Amenities"
        titledis="Enjoy a wide range of top-notch amenities designed to ensure your stay is comfortable, convenient, and enjoyable."
      />

      <div
        className="flex flex-col sm:flex-row "
        style={{ background: "#FFEEA9" }}
      >
        <div className="slider-container flex flex-col w-screen p-4">
          <Slider {...settings}>
            {[...Array(4)].map(
              (
                _,
                index // Generate 4 slides
              ) => (
                <div className="md:px-36 lg:px-40" key={index}>
                  <img src={getRandomImageUrl()} alt={`Slide ${index + 1}`} />
                </div>
              )
            )}
          </Slider>
          <div>
            <h4 className="font-bold text-x sm:text-xl text-center md:text-[30px] mt-4 text-dark mb-4">
              Accomodation Amenities
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
              <div class="bg-white rounded-lg p-4 shadow-md flex flex-col items-center lg:mx-32 ">
                
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold mb-4">
                  H
                </div>
                <p class="text-xl font-semibold text-center">
                  Modern living spaces
                </p>
               
                <p class="text-sm text-gray-600 text-center mt-2">
                  Get all the essentials near your locations and always get what
                  you need whenever you need.
                </p>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-md flex flex-col items-center lg:mx-32 ">
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl font-bold mb-4">
                  $
                </div>
                <p class="text-xl font-semibold text-center">Best Prices</p>
                <p class="text-sm text-gray-600 text-center mt-2">
                  Not sure what you should be charging for your property? No
                  need to worry, let us do the numbers for you.
                </p>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-md flex flex-col items-center lg:mx-32 ">
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl font-bold mb-4">
                  H
                </div>
                <p class="text-xl font-semibold text-center">
                  Home cooked meals
                </p>
                <p class="text-sm text-gray-600 text-center mt-2">
                  Indulge in dishes lovingly prepared to bring warmth and joy to
                  every meal. Taste the essence of culinary creations infused
                  with tenderness and devotion.
                </p>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-md flex flex-col items-center lg:mx-32 ">
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold mb-4">
                  A
                </div>
                <p class="text-xl font-semibold text-center">
                  Best amenities In town
                </p>
                <p class="text-sm text-gray-600 text-center mt-2">
                  Enjoy modern comforts and a vibrant community in our fully
                  furnished PG with amenities like high-speed Wi-Fi, laundry,
                  and 24/7 security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro2;
