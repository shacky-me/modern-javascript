import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const sections = ["home", "about", "projects", "contact", "blog"];

const Navbar = () => {
  const [isMenuIconOpen, setIsMenuIconOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuIconOpen((prev) => !prev);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuIconOpen(false);
      }
    };

    if (isMenuIconOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuIconOpen]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust as needed

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (id) =>
    `text-gray-700 hover:text-[#59b3af] transition ${
      currentSection === id ? "text-[#59b3af] font-semibold" : ""
    }`;

  return (
    <header className="bg-[#ffffff] fixed top-0 left-0 right-0 w-full shadow-neutral-50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-gray-800">KigenMeshack</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={linkClasses(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#007e73] cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuIconOpen ? (
              <CloseIcon className="text-[#d33100]" />
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuIconOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#ffffff] px-4 pb-7 pt-2 shadow-xs flex flex-col items-center space-y-5"
        >
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={linkClasses(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
