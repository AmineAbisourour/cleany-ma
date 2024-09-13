import Icon from "./Icon";
// import facebookLogo from "@/assets/facebook.svg";
// import instagramLogo from "@/assets/instagram.svg";
// import whatsappLogo from "@/assets/whatsapp.svg";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 mb-4 md:mb-0">
          © 2024 Cleany. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-black hover:text-gray-600">
            {/* <img
              src={facebookLogo}
              alt="Facebook logo"
              width={24}
              height={24}
            /> */}
            <Icon name="Facebook" className="size-6 hover:fill-[#0866FF]" />
          </a>
          <a href="/" className="text-black hover:text-gray-600">
            {/* <img
              src={instagramLogo}
              alt="Instagram logo"
              width={24}
              height={24}
            /> */}
            <Icon name="Instagram" className="size-6 hover:fill-[#E4405F]" />
          </a>
          <a href="/" className="text-black hover:text-gray-600">
            {/* <img
              src={whatsappLogo}
              alt="Whatsapp logo"
              width={24}
              height={24}
            /> */}
            <Icon name="Whatsapp" className="size-6 hover:fill-[#25D366]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
