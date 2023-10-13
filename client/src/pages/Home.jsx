import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpg";
import { Link as Lnk } from "react-scroll";
import animationData from "../Animation/animation1.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import Lottie from "react-lottie";
import ListingItem from "../components/ListingItem";
export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  SwiperCore.use([Navigation]);
  console.log(img1);
  const hardcodedImages = [img1, img2, img3, img4, img5];
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}

    <div className="flex flex-col p-4 sm:p-24 max-w-7xl mx-auto">
  {/* Content on top for desktop and tablets */}
  <div className="hidden sm:flex flex-row sm:items-center sm:justify-between">
    {/* Content */}
    <div className="w-full sm:w-1/2 pr-4">
      <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
        Unlock the Gates <br />
        <span className="text-slate-500">to Royal Living !</span>
        <br />
      </h1>
      <div className="text-gray-400 text-xs sm:text-lg mt-4">
        Royal Realms is the best place to find your next perfect place to live.
        <br />
        We have a wide range of properties for you to choose from.
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex justify-center items-center">
          <Lnk
            to="section08"
            smooth={true}
            className="cursor-pointer text-xs sm:text-sm bg-[#a3b6ce] text-white font-bold py-3 px-3 rounded-full hover:bg-[#b9c7d9] w-36 mr-2 flex items-center justify-center"
          >
            Buy / Rent Now!
          </Lnk>
          <Link
            to="/search"
            className="text-xs sm:text-sm bg-[#64748b] text-white font-bold py-3 px-3 rounded-full hover:bg-[#7a8a9e] w-32 ml-2 flex items-center justify-center"
          >
            List Now!
          </Link>
        </div>
      </div>
    </div>
    {/* Image on the right for desktop and tablets */}
    <div className="w-full sm:w-1/2">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
        }}
        height={400} // Adjust the height as needed
        width={400} // Adjust the width as needed
      />
    </div>
  </div>
  {/* Content on top, Image on the bottom for mobile devices */}
  <div className="sm:hidden flex flex-col items-center justify-center mt-10">
    {/* Content for mobile */}
    <div className="text-center">
      <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
        Unlock the Gates <br />
        <span className="text-slate-500">to Royal Living !</span>
        <br />
      </h1>
      <div className="text-gray-400 text-xs sm:text-sm mt-4">
        Royal Realms is the best place to find your next perfect place to live.
        <br />
        We have a wide range of properties for you to choose from.
      </div>
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="flex justify-center items-center">
          <Lnk
            to="section08"
            smooth={true}
            className="cursor-pointer text-xs sm:text-sm bg-[#a3b6ce] text-white font-bold py-3 px-3 rounded-full hover:bg-[#b9c7d9] w-36 mr-2 flex items-center justify-center"
          >
            Buy / Rent Now!
          </Lnk>
          <Link
            to="/search"
            className="text-xs sm:text-sm bg-[#64748b] text-white font-bold py-3 px-3 rounded-full hover.bg-[#7a8a9e] w-32 ml-2 flex items-center justify-center"
          >
            List Now!
          </Link>
        </div>
      </div>
    </div>
    {/* Image for mobile */}
    <div className="mt-4">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
        }}
        height={200} // Adjust the height as needed
        width={200} // Adjust the width as needed
      />
    </div>
  </div>
</div>






      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {hardcodedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${image}) center no-repeat`,
                backgroundSize: "cover",
              }}
              className="h-[500px]"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        <section id="section08">
          {offerListings && offerListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent offers
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?offer=true"}
                >
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for rent
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=rent"}
                >
                  Show more places for rent
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for sale
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=sale"}
                >
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
