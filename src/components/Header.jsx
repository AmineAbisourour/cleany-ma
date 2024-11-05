import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Booking", href: "/booking" },
//   { name: "Booking1", href: "/booking1" },
//   { name: "Booking2", href: "/booking2" },
//   { name: "Steps", href: "/page" },
//   { name: "Contact", href: "#" },
// ];

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img className="scale-75" src={logo} alt="logo" />
        </Link>
        <div className="rounded-md shadow">
          <Link
            to="tel:+212660004043"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 whitespace-nowrap"
          >
            <Phone
              size={20}
              fill="white"
              strokeWidth={0}
              style={{ marginRight: "5px" }}
            />
            Call Now
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
