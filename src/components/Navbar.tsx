import { BookHeart } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-black w-full h-16 flex items-center border-b border-gray-800 shadow-sm z-50 opacity-90 rounded-b-lg">
      <div className="flex-between text-white container">
        <Link to="/">
          <h1 className="text-3xl font-bold flex items-end gap-1">
            <BookHeart className="w-8 h-8" />
            Blog
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li
                className="text-lg underline-offset-4 hover:underline"
                key={link.name}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
