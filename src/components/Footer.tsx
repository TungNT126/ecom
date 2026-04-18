import EmailIcon from "../assets/icons/email.png";
import InstagramIcon from "../assets/icons/social/instagram.png";
import XIcon from "../assets/icons/social/twitter.png";
import TiktokIcon from "../assets/icons/social/tiktok.png";
import FacebookIcon from "../assets/icons/social/facebook.png";
import VisaIcon from "../assets/icons/payment/visa.png";
import MasterCardIcon from "../assets/icons/payment/mastercard.png";
import PaypalIcon from "../assets/icons/payment/paypal.png";
import ApplePayIcon from "../assets/icons/payment/applepay.png";
import GooglePayIcon from "../assets/icons/payment/googlepay.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#F0F0F0] mt-54">
        <div className="mx-4 md:mx-16 lg:mx-24 px-6 bg-black rounded-4xl flex flex-col items-center -translate-y-1/2">
          <p className="font-integral text-[32px] pt-8 mb-3 font-bold text-white leading-9">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="bg-white flex h-10 mt-8 rounded-3xl w-full">
            <img className="px-3 h-6 mt-2" src={EmailIcon} alt="email icon" />
            <input
              name="email"
              className="w-full outline-none"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <button
            className="bg-white text-black mt-3 mb-7 h-10 rounded-3xl w-full hover:cursor-pointer hover:bg-gray-700 hover:text-white"
            type="submit"
          >
            Subscribe to Newsletter
          </button>
        </div>
        <div className="md:flex">
          <div className="-mt-30 md:-mt-20 mx-4 md:mx-16 lg:mx-24 md:flex-1">
            <span className="font-integral text-3xl">SHOP.CO</span>
            <p className="font-thin mt-3">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex mt-5 mb-6">
              <img
                className="w-7 h-7 mr-3"
                src={InstagramIcon}
                alt="instagram icon"
              />
              <img className="w-7 h-7 mr-3" src={XIcon} alt="x icon" />
              <img
                className="w-7 h-7 mr-3"
                src={TiktokIcon}
                alt="tiktok icon"
              />
              <img className="w-7 h-7" src={FacebookIcon} alt="facebook icon" />
            </div>
          </div>
          <div className="md:flex-4 leading-8 mx-4 md:mx-0 md:mr-16 grid grid-cols-2 gap-y-6 md:flex md:justify-between md:-mt-20 font-thin mb-10">
            <ul>
              <li className="font-medium pb-4">Company</li>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
            <ul>
              <li className="font-medium pb-4">Help</li>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <li className="font-medium pb-4">FAQ</li>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
            <ul>
              <li className="font-medium pb-4">Resources</li>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youyube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-16 lg:mx-24 border-t border-gray-300 md:flex md:justify-between">
          <p className="font-thin py-4 text-center">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex justify-around items-center pb-20 md:pt-4">
            <img src={VisaIcon} alt="visa icon" />
            <img src={MasterCardIcon} alt="mastercard icon" />
            <img src={PaypalIcon} alt="paypal icon" />
            <img src={ApplePayIcon} alt="apple pay icon" />
            <img src={GooglePayIcon} alt="google pay icon" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
