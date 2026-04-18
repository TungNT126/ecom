import HomeImg from "../assets/icons/home_img.png";
import StarIcon from "../assets/icons/star.png";
import VersaceLogo from "../assets/icons/brands/versace.png";
import ZaraLogo from "../assets/icons/brands/zara.png";
import GucciLogo from "../assets/icons/brands/gucci.png";
import PradaLogo from "../assets/icons/brands/prada.png";
import CKLogo from "../assets/icons/brands/ck.png";
import CasualBGI from "../assets/bg-img/casual.png";
import FormalBGI from "../assets/bg-img/formal.png";
import PartyBGI from "../assets/bg-img/party.png";
import GymBGI from "../assets/bg-img/gym.png";
import { useQuery } from "@tanstack/react-query";
import FetchProducts from "../services/FetchProducts";
import ProductCard from "../components/ProductCard";

// Lỗi UI khi dùng Ipad

function Home() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => FetchProducts(),
    enabled: false,
  });

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <section className="bg-[#F2F0F1] pt-10 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="left-half w-full md:w-1/2 flex flex-col items-start text-left pt-5">
            <h1 className="font-integral text-4xl lg:text-6xl pt-8 pb-4">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <span className="font-satoshi text-sm md:text-base text-gray-500 ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
            <button
              className="bg-black text-white text-base rounded-4xl w-full md:w-1/2 md py-3.5 mt-6 mb-5 hover:cursor-pointer hover:opacity-70"
              type="button"
            >
              Shop Now
            </button>

            <div className="font-satoshi w-full flex flex-wrap justify-center md:justify-start gap-y-6 md:gap-y-0 md:pt-12">
              <div className="w-1/2 md:w-auto flex flex-col items-center pr-4 border-r border-gray-300">
                <h1 className="font-bold text-2xl md:text-4xl">200+</h1>
                <span className="text-xs md:text-base text-gray-500">
                  International Brands
                </span>
              </div>
              <div className="w-1/2 md:w-auto flex flex-col items-center pl-4 md:px-4 md:border-r md:border-gray-300">
                <h1 className="font-bold text-2xl md:text-4xl">2,000+</h1>
                <span className="text-xs md:text-base  text-gray-500">
                  High-Quality Products
                </span>
              </div>
              <div className="w-full md:w-auto flex flex-col items-center md:pl-4">
                <h1 className="font-bold text-2xl md:text-4xl">30,000+</h1>
                <span className="text-xs md:text-base text-gray-500">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="right-half relative flex-1">
            <img
              src={HomeImg}
              alt="Home Image"
              className="w-full h-auto object-contain"
            />
            <img
              src={StarIcon}
              alt="star icon"
              className="absolute top-30 md:top-60 left-8 w-10 h10 md:w-14 md:h-14"
            />
            <img
              src={StarIcon}
              alt="star icon"
              className="absolute top-0 md:top-25 right-10 w-14 md:w-18 h-14 md:h-18"
            />
          </div>
        </div>
      </section>
      <section className="bg-black flex flex-wrap justify-center md:justify-around items-center gap-x-4 gap-y-5 py-10 mx-auto px-4">
        <img src={VersaceLogo} alt="versace logo" />
        <img src={ZaraLogo} alt="zara logo" />
        <img src={GucciLogo} alt="gucci logo" />
        <img src={PradaLogo} alt="prada logo" />
        <img src={CKLogo} alt="calvin klein logo" />
      </section>

      <div className="h-100 text-center mt-12">
        <span className="font-integral text-3xl">NEW ARRIVALS</span>
        <div className="container">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-100 text-center mt-12">
        <span className="font-integral text-3xl">TOP SELLING</span>
      </div>

      <div className="text-center mx-4 md:mx-16 lg:mx-24 pb-7 rounded-4xl bg-[#F0F0F0] ">
        <h2 className="font-integral text-3xl pt-10 pb-7">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 px-10">
          <div
            className="lg:col-span-1 bg-cover bg-center relative overflow-hidden transition-transform hover:cursor-pointer hover:scale-[1.02] h-47.5 md:h-72.25 rounded-4xl"
            style={{ backgroundImage: `url(${CasualBGI})` }}
          >
            <span className="absolute left-5 top-8 text-2xl font-bold text-black">
              Casual
            </span>
          </div>
          <div
            className="lg:col-span-2 bg-cover bg-center relative overflow-hidden transition-transform hover:cursor-pointer hover:scale-[1.02] h-47.5 md:h-72.25 rounded-4xl"
            style={{ backgroundImage: `url(${FormalBGI})` }}
          >
            <span className="absolute left-5 top-8 text-2xl font-bold text-black">
              Formal
            </span>
          </div>
          <div
            className="lg:col-span-2 bg-cover bg-center relative  overflow-hidden transition-transform hover:cursor-pointer hover:scale-[1.02] h-47.5 md:h-72.25 rounded-4xl"
            style={{ backgroundImage: `url(${PartyBGI})` }}
          >
            <span className="absolute left-5 top-8 text-2xl font-bold text-black">
              Party
            </span>
          </div>
          <div
            className="lg:col-span-1 bg-cover bg-center relative  overflow-hidden transition-transform hover:cursor-pointer hover:scale-[1.02] h-47.5 md:h-72.25 rounded-4xl"
            style={{ backgroundImage: `url(${GymBGI})` }}
          >
            <span className="absolute left-5 top-8 text-2xl font-bold text-black">
              Gym
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
