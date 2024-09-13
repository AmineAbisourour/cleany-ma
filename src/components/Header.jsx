import { Link, NavLink } from "react-router-dom";

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
        <div className="text-2xl font-bold text-black">
          <Link to="/">Cleany</Link>
        </div>
        {/* <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => (isActive ? " text-blue-500" : "")}
            >
              {link.name}
            </NavLink>
          ))}
        </nav> */}
      </div>
    </header>
  );
}
export default Header;
